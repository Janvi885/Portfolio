import React, { useMemo } from 'react';

interface BrickProps {
  width?: number; // in "stud" units
  depth?: number; // in "stud" units
  height?: number; // 1 = standard brick height, 1/3 = plate
  color: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

// Standard Lego dimensions (approximate relative units)
const STUD_RADIUS = 0.35;
const STUD_HEIGHT = 0.2;
const STUD_SPACING = 1;
const BRICK_HEIGHT = 1.2; // Standard brick height relative to stud spacing

export const Brick: React.FC<BrickProps> = ({
  width = 1,
  depth = 1,
  height = 1, // 1 unit = 1 standard brick height
  color,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) => {
  // Calculate actual dimensions
  const boxWidth = width * STUD_SPACING;
  const boxDepth = depth * STUD_SPACING;
  const boxHeight = height * BRICK_HEIGHT;

  // Generate stud positions
  const studs = useMemo(() => {
    const studList = [];
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < depth; j++) {
        studList.push({
          x: (i - (width - 1) / 2) * STUD_SPACING,
          z: (j - (depth - 1) / 2) * STUD_SPACING,
        });
      }
    }
    return studList;
  }, [width, depth]);

  // Shared material props
  const materialProps = {
      color: color,
      roughness: 0.2,
      metalness: 0.0
  };

  return (
    <group position={position} rotation={rotation}>
      {/* Main Brick Body */}
      <mesh
        position={[0, boxHeight / 2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[boxWidth - 0.05, boxHeight, boxDepth - 0.05]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      
      {/* Studs */}
      {studs.map((stud, idx) => (
        <mesh
          key={idx}
          position={[stud.x, boxHeight + STUD_HEIGHT / 2, stud.z]}
          castShadow
          receiveShadow
        >
            <cylinderGeometry args={[STUD_RADIUS, STUD_RADIUS, STUD_HEIGHT, 16]} />
            <meshStandardMaterial {...materialProps} />
        </mesh>
      ))}
    </group>
  );
};
