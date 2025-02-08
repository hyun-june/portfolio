import { useEffect, useRef, useState } from "react";
import "./Cover.css";

const interval = 1000 / 60;

const Cover = () => {
  const canvasRef = useRef(null);
  const [isPlacedParticle, setIsPlacedParticle] = useState(false);
  const [isFinishMainLoading, setIsFinishMainLoading] = useState(false);

  const initCanvas = (canvas) => {
    const ctx = canvas.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const dpr = window.devicePixelRatio;
    canvas.style.width = canvasWidth + "px";
    canvas.style.height = canvasHeight + "px";
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;

    ctx.scale(dpr, dpr);
  };

  const canvasRender = (ctx) => {
    const particles = [];
    let isDrawParticle = false;
    let now, delta;
    let then = Date.now();

    function createRing() {
      const PARTICLE_NUM = 360;
      const perCount = 4;

      function drawNextParticle(count) {
        if (count > PARTICLE_NUM - perCount) {
          isDrawParticle = true;
          setIsPlacedParticle(true);
          return;
        }

        for (let i = count; i <= count + perCount; i += 0.5) {
          const particle = new Particle(i);
          particles.push(particle);
          particle.draw(ctx);
        }

        requestAnimationFrame(() => drawNextParticle(count + perCount));
      }

      requestAnimationFrame(() => drawNextParticle(0));
    }

    createRing();

    const frame = () => {
      requestAnimationFrame(frame);
      if (isDrawParticle === false) return;

      now = Date.now();
      delta = now - then;

      if (delta < interval) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);

        if (particles[i].opacity < 0) particles.splice(i, 1);
      }

      then = now - (delta % interval);

      if (particles.length === 0) {
        setIsFinishMainLoading(true);
        return;
      }
    };

    requestAnimationFrame(frame);
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (!canvasRef.current || !ctx) return;

    initCanvas(canvasRef.current);
    canvasRender(ctx);

    return () => {
      console.log("unmount");
    };
  }, []);

  if (isFinishMainLoading) return null;

  const randomNumBetween = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  class Particle {
    constructor(angle) {
      this.rFriction = randomNumBetween(0.95, 1.01);
      this.rAlpha = randomNumBetween(0, 5);
      this.r = Math.min(window.innerHeight, window.innerWidth) / 2.5;

      this.angleFriction = randomNumBetween(0.97, 0.99);
      this.angleAlpha = randomNumBetween(1, 2);
      this.angle = angle - 90; // 12시 방향부터 시작하도록
      this.x =
        window.innerWidth / 2 + this.r * Math.cos((Math.PI / 180) * this.angle);
      this.y =
        window.innerHeight / 2 +
        this.r * Math.sin((Math.PI / 180) * this.angle);
      this.opacity = 1;
    }

    update() {
      this.rAlpha *= this.rFriction;
      this.r += this.rAlpha;

      this.angleAlpha *= this.angleFriction;
      this.angle += this.angleAlpha;
      this.x =
        window.innerWidth / 2 + this.r * Math.cos((Math.PI / 180) * this.angle);
      this.y =
        window.innerHeight / 2 +
        this.r * Math.sin((Math.PI / 180) * this.angle);

      this.opacity -= 0.009;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${this.opacity}) `;
      ctx.fill();
      ctx.closePath();
    }
  }

  return (
    <section
      className={`cover-container ${isFinishMainLoading ? "hidden" : "block"} `}
    >
      <canvas ref={canvasRef} className="cover-canvas"></canvas>
      <h1
        className={`cover-text ${isPlacedParticle ? "scale-150" : ""} scale-up`}
      >
        {'"Hello, world!"'}
      </h1>
    </section>
  );
};

export default Cover;
