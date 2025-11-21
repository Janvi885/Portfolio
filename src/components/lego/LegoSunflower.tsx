import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Brick } from './Brick';

interface LegoSunflowerProps {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  swaySpeed?: number;
  swayOffset?: number;
}

export const LegoSunflower: React.FC<LegoSunflowerProps> = ({ 
  position = [0, 0, 0], 
  scale = 1,
  rotation = [0, 0, 0],
  swaySpeed = 1,
  swayOffset = 0
}) => {
  const groupRef = useRef<any>(null);
  
  // Animate the flower swaying slightly in the wind
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      // Sway rotation around Z and X axis
      groupRef.current.rotation.z = rotation[2] + Math.sin(t * swaySpeed + swayOffset) * 0.05;
      groupRef.current.rotation.x = rotation[0] + Math.cos(t * swaySpeed * 0.7 + swayOffset) * 0.03;
    }
  });

  // Stem height in bricks
  const stemHeight = 6;

  return (
    <group ref={groupRef} position={position} scale={[scale, scale, scale]}>
      {/* Stem */}
      {Array.from({ length: stemHeight }).map((_, i) => (
        <Brick
          key={`stem-${i}`}
          width={1}
          depth={1}
          height={1}
          color="#4CAF50" // Lego Green
          position={[0, i * 1.2, 0]} // 1.2 is the BRICK_HEIGHT from Brick.tsx
        />
      ))}

      {/* Flower Head Group - Positioned at top of stem */}
      <group position={[0, stemHeight * 1.2, 0]}>
        
        {/* Center */}
        <Brick
          width={2}
          depth={2}
          height={0.33} // Plate
          color="#5D4037" // Brown
          position={[0, 0, 0]}
        />
        
        {/* Petals - Arranged around the center */}
        {/* North */}
        <Brick width={2} depth={1} height={0.33} color="#FFEB3B" position={[0, 0, -1.5]} />
        {/* South */}
        <Brick width={2} depth={1} height={0.33} color="#FFEB3B" position={[0, 0, 1.5]} />
        {/* East */}
        <Brick width={1} depth={2} height={0.33} color="#FFEB3B" position={[1.5, 0, 0]} />
        {/* West */}
        <Brick width={1} depth={2} height={0.33} color="#FFEB3B" position={[-1.5, 0, 0]} />

        {/* Diagonal Petals - Rotated */}
        <group rotation={[0, Math.PI / 4, 0]}>
            <Brick width={2} depth={1} height={0.33} color="#FFC107" position={[0, 0.33, -1.5]} />
            <Brick width={2} depth={1} height={0.33} color="#FFC107" position={[0, 0.33, 1.5]} />
            <Brick width={1} depth={2} height={0.33} color="#FFC107" position={[1.5, 0.33, 0]} />
            <Brick width={1} depth={2} height={0.33} color="#FFC107" position={[-1.5, 0.33, 0]} />
        </group>

      </group>
      
      {/* Leaves on Stem */}
      <group position={[0, 2.4, 0]} rotation={[0, 0, 0.5]}>
         <Brick width={2} depth={1} height={0.2} color="#4CAF50" position={[1, 0, 0]} />
      </group>
       <group position={[0, 4.8, 0]} rotation={[0, 0, -0.5]}>
         <Brick width={2} depth={1} height={0.2} color="#4CAF50" position={[-1, 0, 0]} />
      </group>
    </group>
  );
};
