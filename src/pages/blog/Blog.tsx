import { useState, useMemo, useEffect,Fragment } from 'react';
import {
  Search,
  CalendarDays,
  Clock,
  Eye,
  Heart,
  BookOpen,
  TrendingUp,
  Filter,
  ArrowRight,
  Briefcase,
  Users,
  Target,
  Trophy,
  MessageCircle,
  Lightbulb,
  Globe,
  ChevronDown
} from 'lucide-react';
import { Listbox, Transition } from "@headlessui/react";

interface BlogPost {
  id: string;
  documentId: string;
  title: string;
  description: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  imageUrl: string;
  views: number;
  likes: number;
  featured: boolean;
  tags: string[];
  slug: string;
}

interface Category {
  id: number;
  documentId: string;
  title: string;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular' | 'liked'>('newest');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  // Extract text content from Strapi rich text format
  const extractTextFromDescription = (description: any): string => {
    if (!description) return 'Discover expert insights and strategies for career growth and professional development.';
    
    // Handle string description
    if (typeof description === 'string') {
      return description.substring(0, 200) + (description.length > 200 ? '...' : '');
    }

    // Handle array description (rich text)
    if (Array.isArray(description)) {
      return description
        .map(item => {
          if (item.type === 'paragraph' && item.children) {
            return item.children
              .map((child: any) => child.text || '')
              .join('')
              .trim();
          }
          return '';
        })
        .filter(text => text.length > 0)
        .join(' ')
        .substring(0, 200) + '...';
    }

    return 'Discover expert insights and strategies for career growth and professional development.';
  };

  // Generate slug from title
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Map category to appropriate career-focused icon
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Interview Tips': MessageCircle,
      'Resume Advice': BookOpen,
      'Career Growth': TrendingUp,
      'Remote Work': Globe,
      'Job Search': Target,
      'Professional Development': Trophy,
      'Workplace Skills': Users,
      'Leadership': Lightbulb,
      'General': Briefcase,
      'Technology': Trophy,
      'Business': Briefcase,
      'Marketing': MessageCircle,
      'Design': Lightbulb
    };
    return iconMap[category] || Briefcase;
  };

  // Updated to match career page color scheme
  const getCategoryColor = (category: string) => {
    // Use TopSkyll's signature pink/magenta gradient
    return 'from-[#81004D] to-[#fe5182]';
  };

  // Fetch categories from Strapi
  const fetchCategories = async () => {
    try {
      console.log('Fetching categories...');
      const response = await fetch('https://tidy-song-4988c266ec.strapiapp.com/api/categories');
      
      if (!response.ok) {
        console.error('Categories API response not OK:', response.status, response.statusText);
        throw new Error(`Failed to fetch categories: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Categories API response:', data);
      
      const categoriesData = data.data.map((item: any) => ({
        id: item.id,
        documentId: item.documentId,
        title: item.Title || item.title || item.name || 'Untitled Category'
      }));
      
      console.log('Processed categories:', categoriesData);
      return categoriesData;
    } catch (error) {
      console.error('Error fetching categories:', error);
      // Return empty array to let posts define categories
      return [];
    }
  };

  // Fetch blogs from Strapi with better error handling
  const fetchBlogs = async () => {
    try {
      console.log('Fetching blogs...');
      const response = await fetch('https://tidy-song-4988c266ec.strapiapp.com/api/blogs?populate=*');
      
      if (!response.ok) {
        console.error('Blogs API response not OK:', response.status, response.statusText);
        throw new Error(`Failed to fetch blogs: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Blogs API response:', data);
      
      const blogsData = data.data.map((item: any, index: number) => {
        // Extract category with multiple fallback options
        let categoryTitle = 'General';
        
        if (item.categories && Array.isArray(item.categories) && item.categories.length > 0) {
          categoryTitle = item.categories[0].Title || item.categories[0].title || item.categories[0].name || 'General';
        } else if (item.category) {
          categoryTitle = item.category.Title || item.category.title || item.category.name || 'General';
        }
        
        // Extract description
        const description = extractTextFromDescription(item.Description || item.description || item.content);
        
        const blogPost = {
          id: item.id.toString(),
          documentId: item.documentId,
          title: item.Title || item.title || 'Untitled Post',
          description: description,
          excerpt: description.substring(0, 160) + (description.length > 160 ? '...' : ''),
          author: {
            name: item.author?.name || 'TopSkyll Team',
            avatar: item.author?.avatar || 'https://img.freepik.com/free-photo/smart-businesswoman_23-2147707174.jpg?semt=ais_hybrid&w=740'
          },
          publishedAt: item.publishedAt || item.createdAt || new Date().toISOString(),
          readTime: item.readTime || '5 min read',
          category: categoryTitle,
          imageUrl: item.featuredImage?.url || item.image?.url || 'https://cdn.prod.website-files.com/62196607bf1b46c300301846/6568ae0ec56b155fdb2ad4b3_wykdwuwlbcc4xynmejxr.webp',
          views: item.views || Math.floor(Math.random() * 3000) + 500,
          likes: item.likes || Math.floor(Math.random() * 200) + 20,
          featured: item.featured || index === 0,
          tags: item.tags || ['career', 'professional', 'growth'],
          slug: generateSlug(item.Title || item.title || 'untitled')
        };
        
        console.log('Processed blog post:', blogPost);
        return blogPost;
      });
      
      console.log('All processed blogs:', blogsData);
      return blogsData;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  };

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        console.log('Starting data load...');
        const [blogsData, categoriesData] = await Promise.all([
          fetchBlogs(),
          fetchCategories()
        ]);
        
        console.log('Fetched blogs:', blogsData);
        console.log('Fetched categories:', categoriesData);
        
        setPosts(blogsData);
        setCategories(categoriesData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load content. Please try again later.';
        setError(errorMessage);
        console.error('Error loading data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Create comprehensive category options dynamically
  const categoryOptions = useMemo(() => {
    // Get categories from API
    const apiCategories = categories.map(cat => cat.title);
    
    // Get categories from posts (in case API categories are incomplete)
    const postCategories = [...new Set(posts.map(post => post.category))];
    
    // Combine and deduplicate
    const allCategories = [...new Set([...apiCategories, ...postCategories])].filter(Boolean);
    
    console.log('API Categories:', apiCategories);
    console.log('Post Categories:', postCategories);
    console.log('All Categories:', allCategories);
    
    return ['all', ...allCategories];
  }, [categories, posts]);

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular': return b.views - a.views;
        case 'liked': return b.likes - a.likes;
        case 'oldest': return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        default: return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
    });
  }, [posts, searchQuery, selectedCategory, sortBy]);

  const featuredPost = filteredAndSortedPosts.find(post => post.featured) || filteredAndSortedPosts[0];
  const regularPosts = filteredAndSortedPosts.filter(post => post.id !== featuredPost?.id);

  const handleLike = async (postId: string) => {
    try {
      const newLikedPosts = new Set(likedPosts);
      const isLiked = newLikedPosts.has(postId);

      if (isLiked) {
        newLikedPosts.delete(postId);
      } else {
        newLikedPosts.add(postId);
      }

      setLikedPosts(newLikedPosts);

      // Optimistic UI update
      setPosts(posts.map(post =>
        post.id === postId
          ? { ...post, likes: isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      ));
    } catch (error) {
      console.error('Error updating like:', error);
      setLikedPosts(new Set(likedPosts));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toString();
  };

  // Show loading state with TopSkyll theme
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mx-auto mb-6 animate-spin">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#080106] dark:text-white">Loading Content</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">Fetching the latest career insights...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state with TopSkyll theme
  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="text-center">
            <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-12">
              <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#080106] dark:text-white">Unable to Load Content</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="group inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
        <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section - Matching Career Page Style */}
        <section className="relative pt-20 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#080106] dark:text-white">
                Career <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Insights</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Where Talent Meets Opportunity
                </p>
                <div className="mt-8 inline-flex items-center space-x-2 bg-[#fe5182]/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <Target className="w-5 h-5 text-[#fe5182]" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Expert advice for job seekers and career growth
                </span>
                </div>
            </div>
            </div>
            <div className='absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none' />
        </section>

        {/* Search & Filters */}
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                {categoryOptions.map((category) => {
                    const IconComponent = getCategoryIcon(category);
                    const isActive = selectedCategory === category;
                    
                    return (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`group inline-flex items-center px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                        isActive
                            ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white shadow-lg hover:shadow-pink-500/25'
                            : 'border-2 border-[#e9e9e9] dark:border-[#81004d4f] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] text-[#080106] dark:text-white hover:scale-105 hover:shadow-lg'
                        }`}
                    >
                        <IconComponent className="w-4 h-4 mr-2" />
                        {category === 'all' ? 'All Categories' : category}
                    </button>
                    );
                })}
                </div>
                
                {/* Search */}
                <div className="relative w-full lg:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search career insights..."
                    className="w-full pl-10 pr-4 py-3 border-2 border-[#e9e9e9] dark:border-[#81004d4f] bg-white dark:bg-black text-[#080106] dark:text-white rounded-xl focus:border-[#fe5182] focus:outline-none transition-colors duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                </div>
                
                {/* Sort */}
                <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] bg-white dark:bg-black rounded-xl px-4 py-3 text-[#080106] dark:text-white focus:border-[#fe5182] focus:outline-none transition-colors duration-300"
                >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
                <option value="liked">Most Liked</option>
                </select>
            </div>
            </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article
                className="group grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-xl border-2 border-[#e9e9e9] dark:border-[#81004d4f]
                        bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#fffefb] dark:to-[#000000cc]
                        transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                aria-label={`Featured Article: ${featuredPost.title}`}
            >
                <div className="relative min-h-[320px] md:min-h-[360px] overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white
                                text-sm font-semibold rounded-full px-4 py-1.5 shadow"
                    >
                    <TrendingUp className="w-4 h-4" />
                    Featured
                    </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                    <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white shadow
                                bg-gradient-to-r from-[#fe5182] to-[#81004D]`}
                    >
                    {(() => {
                        const IconComponent = getCategoryIcon(featuredPost.category);
                        return <IconComponent className="w-4 h-4" />;
                    })()}
                    {featuredPost.category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" />
                </div>

                <div className="p-8 flex flex-col justify-between rounded-b-2xl md:rounded-r-2xl bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#fffefb] dark:to-[#000000cc]">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-[#080106] dark:text-white leading-tight tracking-tight">
                    {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                    </p>
                </div>

                <footer className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                    <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-11 h-11 rounded-full border-2 border-[#fe5182]/60 object-cover"
                        loading="lazy"
                    />
                    <div>
                        <p className="text-[#080106] dark:text-white font-semibold">{featuredPost.author.name}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            <time dateTime={featuredPost.publishedAt}>{formatDate(featuredPost.publishedAt)}</time>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <button
                    className="group inline-flex items-center text-[#fe5182] hover:text-[#81004D] font-semibold text-lg tracking-wide
                                transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#fe5182] focus:ring-offset-1 rounded"
                    aria-label={`Read full article: ${featuredPost.title}`}
                    >
                    Read Article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </footer>
                </div>
            </article>
            </div>
        </section>
        )}


        {/* Blog Grid */}
        <section className="py-16 bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regularPosts.map((post) => {
                const IconComponent = getCategoryIcon(post.category);

                return (
                <article
                    key={post.id}
                    className="group bg-white dark:bg-[#0a0a0a] rounded-3xl border border-[#e9e9e9] dark:border-[#81004d7a] shadow-md dark:shadow-[#81004d33] overflow-hidden transform transition-transform duration-300 hover:scale-[1.03]"
                >
                    <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    </div>

                    <div className="px-7 py-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <div
                        className={`flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-r ${getCategoryColor(
                            post.category
                        )}`}
                        >
                        <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full text-[#efefef] bg-[#fe5182]/25 dark:bg-[#fe5182]/35">
                        {post.category}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#080106] dark:text-white leading-snug mb-3 group-hover:text-[#fe5182] transition-colors duration-300 line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-4">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-9 h-9 rounded-full object-cover border-2 border-[#fe5182]"
                        />
                        <span className="text-sm font-semibold text-[#080106] dark:text-white">
                            {post.author.name}
                        </span>
                        </div>

                        <button className="text-[#fe5182] hover:text-[#81004D] transition-colors duration-300 opacity-0 group-hover:opacity-100">
                        <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    </div>
                </article>
                );
            })}
            </div>
        </div>
        </section>


        {/* Empty State */}
        {filteredAndSortedPosts.length === 0 && !isLoading && (
            <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#080106] dark:text-white">No Articles Found</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                    We couldn't find any articles matching your search criteria.
                    </p>
                    <button
                    onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                    }}
                    className="group inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                    >
                    Clear Filters
                    </button>
                </div>
                </div>
            </div>
            </section>
        )}

        {/* Newsletter CTA - Matching Career Page Style */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6
                text-[#3B0036] dark:text-[#fe5182] leading-tight">
                Stay Ahead in Your Career
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto
                text-[#4A004B] dark:text-[#fe5182]/80">
                Get expert career advice and job search strategies delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
                <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20
                    text-[#3B0036] placeholder:text-[#3B0036]/70 rounded-xl
                    focus:bg-white/20 focus:outline-none focus:border-[#81004D]/80
                    transition-all duration-300 dark:bg-[#81004D1a] dark:text-[#fe5182] dark:placeholder:text-[#fe5182]/60"
                />
                <button className="bg-[#81004D] text-white hover:bg-[#fe5182] font-semibold px-6 py-3 rounded-xl transition-colors duration-300">
                Subscribe
                </button>
            </div>
            <div className="mt-12 text-center">
                <p className="text-lg mb-4 text-[#4A004B] dark:text-[#fe5182]/80">
                Join thousands of professionals advancing their careers with TopSkyll.
                </p>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <MessageCircle className="w-5 h-5 text-[#81004D] dark:text-[#fe5182]" />
                <span className="font-medium text-[#81004D] dark:text-[#fe5182]">
                    TopSkyll is committed to empowering your career journey.
                </span>
                </div>
            </div>
            </div>
        </div>
        </section>

        </div>
  );
};

export default Blog;