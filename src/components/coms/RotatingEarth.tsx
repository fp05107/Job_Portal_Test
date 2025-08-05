// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars, useTexture } from '@react-three/drei';
// import * as THREE from 'three';

// function Earth() {
//   const earthRef = useRef<THREE.Mesh>(null!);

//   const [colorMap, normalMap, specularMap, cloudMap] = useTexture([
//     '/src/assets/earth/earthAlbedo.jpg',
//     '/src/assets/earth/earthBump.jpg',
//     '/src/assets/earth/earthLandOceanMask.png',
//     '/src/assets/earth/cloudsEarth.png',
//   ]);

//   useFrame(() => {
//     earthRef.current.rotation.y += 0.002;
//   });

//   return (
//     <>
//       {/* Earth Sphere */}
//       <mesh ref={earthRef}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshPhongMaterial
//           map={colorMap}
//           bumpMap={normalMap}
//           specularMap={specularMap}
//           shininess={20}
//         />
//         <ambientLight intensity={1.4} /> {/* Previously 0.4*/}
//         <directionalLight position={[3, 3, 3]} intensity={2} /> {/*  Previously 1 */}
//       </mesh>

//       {/* Optional Cloud Layer */}
//       <mesh ref={earthRef}>
//         <sphereGeometry args={[1.01, 64, 64]} />
//         <meshPhongMaterial
//           map={cloudMap}
//           transparent={true}
//           opacity={0.2}
//           depthWrite={false}
//         />
//       </mesh>
//     </>
//   );
// }

// export default function RotatingEarthScene() {
//   return (
//     <div className="h-[500px] w-full">
//       <Canvas camera={{ position: [2, 0, 2] }}>
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade />
//         <Earth />
//         <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
//       </Canvas>
//     </div>
//   );
// }
