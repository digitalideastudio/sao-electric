import { useEffect, useRef } from 'react';

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: 'forward' | 'backward';
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

export default function Plasma({
  color = '#8384D6',
  speed = 0.6,
  direction = 'forward',
  scale = 1.1,
  opacity = 0.8,
  mouseInteractive = true,
}: PlasmaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Helper function to parse hex to RGB
  const hexToRgb = (hex: string) => {
    // Remove # if present and trim whitespace
    const cleaned = hex.trim().replace(/^#/, '');
    
    // Handle 6-digit hex
    if (/^[0-9a-f]{6}$/i.test(cleaned)) {
      return {
        r: parseInt(cleaned.substring(0, 2), 16),
        g: parseInt(cleaned.substring(2, 4), 16),
        b: parseInt(cleaned.substring(4, 6), 16),
      };
    }
    
    // Handle 3-digit hex
    if (/^[0-9a-f]{3}$/i.test(cleaned)) {
      return {
        r: parseInt(cleaned[0] + cleaned[0], 16),
        g: parseInt(cleaned[1] + cleaned[1], 16),
        b: parseInt(cleaned[2] + cleaned[2], 16),
      };
    }
    
    // Fallback to default orange color
    console.warn(`Invalid hex color: ${hex}, using default color`);
    return { r: 255, g: 107, b: 53 };
  };
  
  const rgbRef = useRef<{ r: number; g: number; b: number }>(hexToRgb(color));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Update RGB color when color prop changes
    rgbRef.current = hexToRgb(color);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseInteractive) {
        mouseRef.current.x = e.clientX / canvas.width;
        mouseRef.current.y = e.clientY / canvas.height;
      }
    };

    if (mouseInteractive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      const directionMultiplier = direction === 'forward' ? 1 : -1;
      const time = timeRef.current * speed * directionMultiplier;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;

          // Normalize coordinates
          const nx = (x / width) * scale;
          const ny = (y / height) * scale;

          // Mouse influence
          const mx = mouseInteractive ? mouseRef.current.x : 0.5;
          const my = mouseInteractive ? mouseRef.current.y : 0.5;
          const mouseDist = Math.sqrt(
            Math.pow(nx - mx, 2) + Math.pow(ny - my, 2)
          );

          // Create plasma effect using multiple sine waves
          const value =
            Math.sin((nx + time) * 2) +
            Math.sin((ny + time) * 2) +
            Math.sin((nx + ny + time) * 1.5) +
            Math.sin(Math.sqrt(nx * nx + ny * ny) * 3 + time * 2) +
            (mouseInteractive ? Math.sin(mouseDist * 10 - time * 2) * 0.5 : 0);

          // Normalize value to 0-1 range
          const normalized = (value + 4) / 8;

          // Apply opacity
          const alpha = Math.floor(normalized * 255 * opacity);

          data[index] = rgbRef.current.r; // R
          data[index + 1] = rgbRef.current.g; // G
          data[index + 2] = rgbRef.current.b; // B
          data[index + 3] = alpha; // A
        }
      }

      ctx.putImageData(imageData, 0, 0);
      timeRef.current += 0.01;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (mouseInteractive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}

