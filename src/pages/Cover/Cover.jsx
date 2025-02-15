import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cover.css";

const interval = 1000 / 60; // 퍼지는 속도

const Cover = () => {
  const canvasRef = useRef(null);
  const [isPlacedParticle, setIsPlacedParticle] = useState(false);
  const [isFinishMainLoading, setIsFinishMainLoading] = useState(false);

  // 캔버스 초기화
  const initCanvas = (canvas) => {
    const ctx = canvas.getContext("2d"); // 2d 렌더링 컨텍스트 가져오기
    const canvasWidth = window.innerWidth; // 화면 가로 길이
    const canvasHeight = window.innerHeight; // 화면 세로 길이
    const dpr = window.devicePixelRatio; // 디바이스 픽셀 비율
    canvas.style.width = canvasWidth + "px"; // CSS 스타일에 맞춰 캔버스 크기 설정
    canvas.style.height = canvasHeight + "px";
    canvas.width = canvasWidth * dpr; // 실제 캔버스 크기 설정 (디바이스 픽셀 비율 반영)
    canvas.height = canvasHeight * dpr;

    ctx.scale(dpr, dpr); // 렌더링 컨텍스트 스케일 조정
  };

  // 캔버스에서 파티클을 렌더링하는 함수
  const canvasRender = (ctx) => {
    const particles = []; // 파티클 배열
    let isDrawParticle = false; // 파티클이 다 그려졌는지 여부
    let now, delta;
    let then = Date.now(); // 애니메이션 시작 시간

    // 파티클을 원형으로 배치하는 함수
    function createRing() {
      const PARTICLE_NUM = 360; // 파티클 수 (360도로 원을 만듦)
      const perCount = 4; // 한 번에 그릴 파티클 수

      // 일정 수의 파티클을 순차적으로 그리는 함수
      function drawNextParticle(count) {
        if (count > PARTICLE_NUM - perCount) {
          isDrawParticle = true; // 파티클이 모두 그려졌으면 표시
          setIsPlacedParticle(true); // 파티클 배치 완료 상태로 업데이트
          return;
        }

        // 파티클 생성 및 그리기
        for (let i = count; i <= count + perCount; i += 0.5) {
          const particle = new Particle(i);
          particles.push(particle);
          particle.draw(ctx); // 각 파티클을 캔버스에 그림
        }

        requestAnimationFrame(() => drawNextParticle(count + perCount)); // 다음 파티클 그리기
      }

      requestAnimationFrame(() => drawNextParticle(0)); // 첫 번째 파티클 그리기
    }

    createRing(); // 원형으로 파티클을 배치

    // 애니메이션 프레임을 갱신하는 함수
    const frame = () => {
      requestAnimationFrame(frame); // 계속해서 호출하여 애니메이션 유지
      if (isDrawParticle === false) return;

      now = Date.now(); // 현재 시간
      delta = now - then; // 경과 시간

      if (delta < interval) return; // 일정 시간 간격을 맞추기 위한 조건

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // 이전 프레임 지우기

      // 모든 파티클을 업데이트하고 그리기
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);

        if (particles[i].opacity < 0) particles.splice(i, 1); // 불투명도가 0 이하인 파티클 제거
      }

      then = now - (delta % interval); // 프레임 시간 조정

      if (particles.length === 0) {
        setIsFinishMainLoading(true); // 파티클이 다 사라지면 로딩 끝으로 처리
        return;
      }
    };

    requestAnimationFrame(frame); // 애니메이션 시작
  };

  const navigate = useNavigate();

  // 컴포넌트가 처음 마운트 될 때 캔버스를 초기화하고 애니메이션을 시작
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (!canvasRef.current || !ctx) return;

    initCanvas(canvasRef.current); // 캔버스 초기화
    canvasRender(ctx); // 애니메이션 시작

    return () => {
      console.log("unmount"); // 컴포넌트가 언마운트될 때 호출 (정리 작업)
    };
  }, []);

  // 로딩이 끝났으면 화면을 숨김
  if (isFinishMainLoading) {
    navigate("/Home");
    return null;
  }

  // 랜덤한 숫자를 반환하는 함수
  const randomNum = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // 파티클 클래스 정의
  class Particle {
    constructor(angle) {
      // 파티클 속성 초기화
      this.rFriction = randomNum(0.95, 1.01);
      this.rAlpha = randomNum(0, 5);
      this.r = Math.min(window.innerHeight, window.innerWidth) / 2.5;

      this.angleFriction = randomNum(0.97, 0.99);
      this.angleAlpha = randomNum(1, 2);
      this.angle = angle - 90; // 12시 방향부터 시작하도록
      this.x =
        window.innerWidth / 2 + this.r * Math.cos((Math.PI / 180) * this.angle); // 파티클의 x 좌표
      this.y =
        window.innerHeight / 2 +
        this.r * Math.sin((Math.PI / 180) * this.angle); // 파티클의 y 좌표
      this.opacity = 1; // 파티클의 불투명도
    }

    // 파티클 업데이트 (위치, 속도 등 변경)
    update() {
      this.rAlpha *= this.rFriction; // 반지름 변화 속도
      this.r += this.rAlpha;

      this.angleAlpha *= this.angleFriction; // 각도 변화 속도
      this.angle += this.angleAlpha;
      this.x =
        window.innerWidth / 2 + this.r * Math.cos((Math.PI / 180) * this.angle); // x 좌표 갱신
      this.y =
        window.innerHeight / 2 +
        this.r * Math.sin((Math.PI / 180) * this.angle); // y 좌표 갱신

      this.opacity -= 0.009; // 불투명도 감소
    }

    // 파티클 그리기
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2); // 파티클을 원형으로 그리기
      ctx.fillStyle = `rgba(255,255,255,${this.opacity}) `; // 불투명도 적용
      ctx.fill();
      ctx.closePath();
    }
  }

  return (
    <section
      className={`cover-container ${isFinishMainLoading ? "hidden" : "block"}`}
    >
      <canvas ref={canvasRef} className="cover-canvas"></canvas>
      <h1 className={`cover-text ${isPlacedParticle ? "scale-up" : ""}`}>
        {'"Hello, world!"'}
      </h1>
    </section>
  );
};

export default Cover;
