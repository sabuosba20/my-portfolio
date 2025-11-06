import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

function AvatarModel() {
  const { scene } = useGLTF("https://models.readyplayer.me/690c16c148062250a426aaf4.glb");

  // Clean up unwanted reflections
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.envMapIntensity = 0;
      child.material.side = THREE.FrontSide;
      child.material.needsUpdate = true;
    }
  });

  scene.rotation.y = 0;

  return <primitive object={scene} scale={1.5} position={[0, -2.4, 0]} />;
}

export default function Avatar3D() {
  const [showAvatar, setShowAvatar] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // Show avatar only at top or near bottom
      if (currentScroll < 350 || currentScroll > maxScroll - 450) {
        setShowAvatar(true);
      } else {
        setShowAvatar(false);
      }

      setScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBottom =
    scrollY > document.body.scrollHeight - window.innerHeight - 450;

  return (
    <AnimatePresence>
      {showAvatar && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "drop-shadow(0 0 20px rgba(59,130,246,0.7))",
          }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.3, 1] }}
          className={`fixed z-50 w-52 h-52 pointer-events-none ${
            isBottom ? "bottom-0 left-2" : "bottom-0 right-2"
          }`}
        >
          {/* Avatar */}
          <Canvas
            camera={{ position: [0, 1.5, 3], fov: 18 }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={1.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <AvatarModel />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Canvas>

          {/* Top message */}
          {!isBottom && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-16 right-44 bg-white/95 text-gray-900 text-sm px-3 py-2 rounded-2xl shadow-lg border border-gray-200 backdrop-blur-md"
            >
              Hi there 👋 <br /> Welcome to my portfolio!
              <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-300"></div>
            </motion.div>
          )}

          {/* 👋 Animated bottom message */}
          {isBottom && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: [0.25, 1, 0.3, 1] },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute top-[-65px] left-44 bg-white/95 text-gray-900 text-sm px-3 py-2 rounded-2xl shadow-lg border border-gray-200 backdrop-blur-md"
            >
              <motion.span
                className="inline-block"
                animate={{
                  rotate: [0, 15, -10, 15, 0],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>{" "}
              <motion.span
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Thanks for visiting!
              </motion.span>
              <div className="absolute top-[38px] left-6 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-300"></div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
