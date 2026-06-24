import { Component, Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import * as THREE from "three";

const AVATAR_MODEL_URL =
  "https://models.readyplayer.me/690c16c148062250a426aaf4.glb";

class AvatarErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Avatar failed to render", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 639px)").matches
      : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const handleChange = (event) => setIsSmallScreen(event.matches);

    setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isSmallScreen;
}

function AvatarModel({ isSmallScreen }) {
  const { scene } = useGLTF(AVATAR_MODEL_URL);

  const model = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.envMapIntensity = 0;
        child.material.side = THREE.FrontSide;
        child.material.needsUpdate = true;
      }
    });

    clone.rotation.y = 0;
    return clone;
  }, [scene]);

  return (
    <primitive
      object={model}
      scale={isSmallScreen ? 1.2 : 1.5}
      position={[0, -2.4, 0]}
    />
  );
}

export default function Avatar3D() {
  const [showAvatar, setShowAvatar] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      setShowAvatar(currentScroll < 350 || currentScroll > maxScroll - 450);
      setScrollY(currentScroll);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBottom =
    scrollY > document.body.scrollHeight - window.innerHeight - 450;

  return (
    <AvatarErrorBoundary>
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
            className={`fixed z-50 pointer-events-none w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 ${
              isBottom ? "bottom-0 left-2" : "bottom-0 right-2"
            }`}
          >
            <Canvas
              camera={{
                position: [0, 1.5, isSmallScreen ? 4 : 3],
                fov: isSmallScreen ? 25 : 18,
              }}
              style={{ background: "transparent" }}
            >
              <ambientLight intensity={1.6} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} />
              <Suspense fallback={null}>
                <AvatarModel isSmallScreen={isSmallScreen} />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
            </Canvas>

            {!isBottom && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-16 right-44 bg-white/95 text-gray-900 text-sm px-3 py-2 rounded-2xl shadow-lg border border-gray-200 backdrop-blur-md"
              >
                Hi there ðŸ‘‹ <br /> Welcome to my portfolio!
                <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-300"></div>
              </motion.div>
            )}

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
                  animate={{ rotate: [0, 15, -10, 15, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ðŸ‘‹
                </motion.span>{" "}
                <motion.span
                  animate={{ y: [0, -2, 0] }}
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
    </AvatarErrorBoundary>
  );
}

useGLTF.preload(AVATAR_MODEL_URL);
