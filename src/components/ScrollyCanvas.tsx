"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 75;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameStr = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameStr}_delay-0.066s.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Draw function
  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img || !img.complete) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dark background as fallback
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Initial draw and resize handler
  useEffect(() => {
    if (images.length === 0) return;
    
    // Ensure image 0 is drawn initially once loaded
    images[0].onload = () => drawImage(0);
    // Draw immediately if already loaded
    if (images[0].complete) drawImage(0);

    const handleResize = () => drawImage(Math.min(FRAME_COUNT - 1, Math.floor(scrollYProgress.get() * FRAME_COUNT)));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  // Handle scroll updates
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * FRAME_COUNT);
    if (index >= FRAME_COUNT) index = FRAME_COUNT - 1;
    if (index < 0) index = 0;
    
    if (images[index]?.complete) {
        drawImage(index);
    } else if (images[index]) {
        // Fallback or retry logic if desired, preloading normally handles this
        images[index].onload = () => {
            if (images[index]?.complete) drawImage(index);
        };
    }
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
}
