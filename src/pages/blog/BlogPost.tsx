import { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardDescription
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    ArrowLeft,
    CalendarDays,
    Clock,
    Eye,
    Heart,
    Bookmark,
    Share2,
    MessageCircle,
    ThumbsUp,
    ArrowRight,
    TrendingUp
} from 'lucide-react';
import { useLocation } from 'wouter';

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    author: {
        name: string;
        avatar: string;
        bio: string;
    };
    publishedAt: string;
    readTime: string;
    category: string;
    imageUrl: string;
    views: number;
    likes: number;
    comments: number;
    tags: string[];
    relatedPosts: {
        id: string;
        slug: string;
        title: string;
        excerpt: string;
        category: string;
        readTime: string;
    }[];
}

const BlogPost = ({ post }: { post: any }) => {
    const [, navigate] = useLocation();
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<{
        id: string;
        author: string;
        content: string;
        date: string;
        likes: number;
    }[]>([]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatNumber = (num: number) => {
        if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
        return num.toString();
    };

    const handleLike = async () => {
        try {
            setIsLiked(!isLiked);
            await fetch(`/api/blog/${post.id}/like`, {
                method: isLiked ? 'DELETE' : 'POST'
            });
        } catch (error) {
            console.error('Error updating like:', error);
            setIsLiked(!isLiked); // Revert on error
        }
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        // Add API call to update bookmark status
    };

    const handleShare = (platform: string) => {
        const url = `${window.location.origin}/blog/${post.slug}`;
        const text = `Check out this article: ${post.title}`;

        switch (platform) {
            case 'copy':
                navigator.clipboard.writeText(url);
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
                break;
            // Add other platforms as needed
        }
        setShowShareMenu(false);
    };

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;

        try {
            const response = await fetch(`/api/blog/${post.id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: comment }),
            });

            if (response.ok) {
                const newComment = await response.json();
                setComments([...comments, newComment]);
                setComment('');
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="container py-8 max-w-4xl">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    onClick={() => navigate('/blog')}
                    className=" mb-[3rem] sm:mb-[5rem] text-white text-lg"
                >
                    <ArrowLeft className="mr-2 h-6 w-6" />
                    Back to Blog
                </Button>

                {/* Post Header */}
                <div className="mb-8">
                    <div className="flex gap-2 mb-4">
                        <Badge>{post.category}</Badge>
                        {post.views > 1000 && (
                            <Badge variant="secondary">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Popular
                            </Badge>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{post.title}</h1>
                    <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    {post.author.avatar ? (
                                        <img
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            className="w-full h-full rounded-full"
                                        />
                                    ) : (
                                        <span className="text-sm font-medium text-white">
                                            {post.author.name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium text-white">{post.author.name}</p>
                                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                                        <span className="flex items-center gap-1">
                                            <CalendarDays className="h-4 w-4" />
                                            {formatDate(post.publishedAt)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {post.readTime}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex items-center gap-2 mt-2 sm:mt-0 ml-[-2.5rem] sm:ml-0">
                            <button
                                onClick={handleLike}
                                className="flex items-center gap-1 text-sm hover:text-red-500 transition-colors"
                            >
                                <Heart className={`h-5 w-5 text-white ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                                <span className='text-white'>{formatNumber(post.likes + (isLiked ? 1 : 0))}</span>
                            </button>

                            <button
                                onClick={handleBookmark}
                                className="p-2 hover:bg-muted rounded-lg transition-colors"
                            >
                                <Bookmark className={`h-5 w-5 text-white ${isBookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setShowShareMenu(!showShareMenu)}
                                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                                >
                                    <Share2 className="h-5 w-5 text-white text-muted-foreground" />
                                </button>

                                {showShareMenu && (
                                    <div className="absolute right-0 mt-2 bg-background rounded-md shadow-lg border p-2 z-10 w-40">
                                        <button
                                            onClick={() => handleShare('copy')}
                                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded text-white"
                                        >
                                            Copy Link
                                        </button>
                                        <button
                                            onClick={() => handleShare('twitter')}
                                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded text-white"
                                        >
                                            Share on Twitter
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Featured Image */}
                <div className="aspect-video bg-muted rounded-lg mb-8"></div>

                {/* Post Content */}
                <article
                    className="prose dark:prose-invert max-w-none mb-12"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {/* <div className="flex flex-wrap gap-2 mb-12">
                    {post.tags.map((tag: any) => (
                        <Badge key={tag} variant="outline">#{tag}</Badge>
                    ))}
                </div> */}

                {/* Author Bio */}
                <Card className="mb-12">
                    <CardHeader>
                        <CardTitle>About the Author</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                                {post.author.avatar ? (
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="w-full h-full rounded-full"
                                    />
                                ) : (
                                    <span className="text-lg font-medium">
                                        {post.author.name.charAt(0)}
                                    </span>
                                )}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-white">{post.author.name}</h3>
                                <p className="text-muted-foreground text-white">{post.author.bio}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Comments Section */}
                {/* <Card className="mb-12">
                    <CardHeader>
                        <CardTitle>Comments ({post.comments + comments.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleCommentSubmit} className="mb-8">
                            <div className="space-y-4">
                                <Input
                                    placeholder="Add a comment..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <div className="flex justify-end">
                                    <Button type="submit" disabled={!comment.trim()}>
                                        Post Comment
                                    </Button>
                                </div>
                            </div>
                        </form>

                        <div className="space-y-6">
                            {comments.map(comment => (
                                <div key={comment.id} className="border-b pb-6 last:border-b-0">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                            <span className="text-xs font-medium">
                                                {comment.author.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-medium">{comment.author}</span>
                                                <span className="text-sm text-muted-foreground">
                                                    {formatDate(comment.date)}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground mb-2">{comment.content}</p>
                                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                <ThumbsUp className="h-4 w-4" />
                                                {comment.likes}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card> */}

                {/* Related Posts */}
                {/* {post.relatedPosts.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {post.relatedPosts.map((relatedPost: any) => (
                            <Card
                                key={relatedPost.id}
                                className="group hover:shadow-lg transition-shadow cursor-pointer"
                                onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                            >
                                <CardHeader>
                                    <Badge variant="secondary" className="mb-2 w-fit">
                                        {relatedPost.category}
                                    </Badge>
                                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                                        {relatedPost.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-3">
                                        {relatedPost.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">
                                        {relatedPost.readTime}
                                    </span>
                                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            )} */}
            </div>
        </div>
    );
};

export default BlogPost;