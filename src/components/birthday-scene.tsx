"use client";
import { Mesh } from "three";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Text,
  PresentationControls,
  Environment,
  Float,
  Stars,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three"; // Import react-spring for 3D
import Confetti from "@/components/confetti";
import { useRef } from "react";

// Types for props
type GiftBoxProps = {
  isBoxOpened: boolean;
  setIsBoxOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

interface BirthdayMessageProps {
  isBoxOpened: boolean;
  username: string;
}

interface BirthdaySceneProps {
  isBoxOpened: boolean;
  setIsBoxOpened: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
}

// Gift Box component
function GiftBox({ isBoxOpened, setIsBoxOpened }: GiftBoxProps) {
  const boxRef = useRef<Mesh | null>(null);
  const lidRef = useRef<Mesh | null>(null);

  const handleBoxClick = () => {
    if (!isBoxOpened) {
      setIsBoxOpened(true);
    }
  };

  // Use spring for box and lid animations
  const boxSpring = useSpring({
    position: isBoxOpened ? [0, -5, 0] : [0, 0, 0],
    config: { tension: 170, friction: 26 },
  });

  const lidSpring = useSpring({
    position: isBoxOpened ? [0, 2, 0] : [0, 0.55, 0],
    rotation: isBoxOpened ? [Math.PI / 2, 0, -1] : [0, 0, 0],
    config: { tension: 170, friction: 26 },
  });

  return (
    <group>
      <animated.mesh
        ref={boxRef}
        {...boxSpring}
        onClick={handleBoxClick}
        whileHover={{ scale: 1.05 }}
      >
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#ff4d6d" />
        <mesh position={[0, 0.51, 0]}>
          <boxGeometry args={[2.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#ffb703" />
        </mesh>
        <mesh position={[0, 0.51, 0]}>
          <boxGeometry args={[0.1, 0.1, 2.1]} />
          <meshStandardMaterial color="#ffb703" />
        </mesh>
      </animated.mesh>
      <animated.mesh
        ref={lidRef}
        {...lidSpring}
        onClick={handleBoxClick}
        whileHover={{ scale: 1.05 }}
      >
        <boxGeometry args={[2.2, 0.2, 2.2]} />
        <meshStandardMaterial color="#ff4d6d" />
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#ffb703" />
        </mesh>
      </animated.mesh>
    </group>
  );
}

// Birthday message component
function BirthdayMessage({ isBoxOpened, username }: BirthdayMessageProps) {
  // Use spring for birthday message animation
  const messageSpring = useSpring({
    scale: isBoxOpened ? 1 : 0,
    y: isBoxOpened ? 1.5 : 0,
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.group {...messageSpring}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.6}
          color="#ffffff"
          font="/fonts/Inter-Bold.ttf"
          textAlign="center"
        >
          Happy Birthday!
        </Text>
      </Float>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          position={[0, -1, 0]}
          fontSize={0.4}
          color="#ffb703"
          font="/fonts/Inter-Bold.ttf"
          textAlign="center"
        >
          {username}
        </Text>
      </Float>
    </animated.group>
  );
}

// Main 3D scene component
export default function BirthdayScene({
  isBoxOpened,
  setIsBoxOpened,
  username,
}: BirthdaySceneProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isBoxOpened) {
      setShowConfetti(true);
    }
  }, [isBoxOpened]);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            snap={true}
          >
            <GiftBox
              isBoxOpened={isBoxOpened}
              setIsBoxOpened={setIsBoxOpened}
            />
            <BirthdayMessage isBoxOpened={isBoxOpened} username={username} />
          </PresentationControls>
          {isBoxOpened && (
            <Stars
              radius={100}
              depth={50}
              count={1000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
          )}
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
      {showConfetti && <Confetti />}
    </>
  );
}
