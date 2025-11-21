import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { LegoSunflower } from './LegoSunflower';
import { Brick } from './Brick';

const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#2E7D32" />
    </mesh>
  );
};

const ResponsiveCameraRig = () => {
    const { size } = useThree();
    
    useFrame((state) => {
        const isMobile = size.width < 768;
        
        // Base position calculations
        // Desktop: Closer, slightly angled to put flowers on the right (since text is on left)
        // Mobile: Further away to see more context
        const baseDist = isMobile ? 20 : 14;
        const height = isMobile ? 12 : 6;
        
        // Mouse parallax effect
        const xParallax = state.mouse.x * (isMobile ? 1 : 2);
        const yParallax = state.mouse.y * (isMobile ? 1 : 2);

        // Target position
        // We shift the camera position to framing
        const targetX = baseDist + xParallax;
        const targetY = height + yParallax;
        const targetZ = baseDist + xParallax;

        // Manual lerp
        state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
        state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
        state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
        
        // LookAt Adjustment
        // We look slightly to the 'left' of the center (negative coordinates) 
        // to push the scene content (flowers) to the 'right' of the viewport on Desktop
        // On Mobile, we center it more.
        const lookAtX = isMobile ? 0 : -4;
        const lookAtY = 2;
        const lookAtZ = isMobile ? 0 : -4;
            
        state.camera.lookAt(lookAtX, lookAtY, lookAtZ);
    });
    return null;
}

export const LegoGardenScene: React.FC = () => {
  console.log('LegoGardenScene rendering...');
  
  // Sunflowers positioned to form a garden
  const sunflowers = [
    { pos: [0, 0, 0], scale: 1, offset: 0 },
    { pos: [3, 0, 2], scale: 0.8, offset: 1 },
    { pos: [-2, 0, 4], scale: 0.9, offset: 2 }, 
    { pos: [4, 0, -2], scale: 1.1, offset: 3 }, // Moved to be more visible
    { pos: [1, 0, 5], scale: 0.85, offset: 4 }, // Moved forward
    { pos: [6, 0, 0], scale: 0.7, offset: 5 },  // Extended right
    { pos: [-1, 0, -3], scale: 0.9, offset: 0.5 },
  ];

  try {
    return (
      <div className="w-full h-full absolute inset-0 bg-sky-300">
        <Canvas shadows dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight 
            position={[20, 30, 10]} 
            intensity={1.8} 
            castShadow 
            shadow-mapSize={[2048, 2048]}
            shadow-bias={-0.0001}
        >
            <orthographicCamera attach="shadow-camera" args={[-30, 30, 30, -30]} />
        </directionalLight>
        
        <Ground />

        {sunflowers.map((flower, idx) => (
            <LegoSunflower 
                key={idx}
                position={flower.pos as [number, number, number]}
                scale={flower.scale}
                swayOffset={flower.offset}
            />
        ))}
        
        {/* Decorative Bricks - Scattered around visually interesting spots */}
        <Brick position={[4, 0, 4]} color="#F44336" rotation={[0, 0.5, 0]} />
        <Brick position={[5, 0, 2]} color="#2196F3" rotation={[0, -0.2, 0]} />
        <Brick position={[2, 0, 6]} color="#FFEB3B" rotation={[0, 0.8, 0]} />

        <ResponsiveCameraRig />
      </Canvas>
    </div>
    );
  } catch (error) {
    console.error('Error in LegoGardenScene:', error);
    return (
      <div className="w-full h-full absolute inset-0 bg-sky-300 flex items-center justify-center">
        <div className="text-black font-bold">Canvas Error: {error instanceof Error ? error.message : String(error)}</div>
      </div>
    );
  }
};
