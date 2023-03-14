import Link from "next/link";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LottieCard from "./LottieCard";
import ParticlePage from "./ParticlePage";

function HomeBg() {
  const particleInit = useCallback(async (e) => {
    console.log(e);
    await loadFull(e);
  }, []);

  const particleLoaded = useCallback(async (cont) => {
    await console.log(cont);
  }, []);

  return (
    <div className="particle-container">
      <Particles
        id="tsparticles"
        init={particleInit}
        loaded={particleLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          style: {
            // position: "absolute",
            top: 0,
            left: 0,
            // opacity: 0.9,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              grab: {
                quantity: 10,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
      <div
        className="lottie-container"
        style={{ width: "620px", marginLeft: "25px" }}
      >
        <LottieCard src="https://assets6.lottiefiles.com/packages/lf20_jcppuvpk/data.json" />
      </div>
      <div className="intro-container">
        <h1>Decentralizing files & Docs with Smart Contracts</h1>
        <h4>Control access, ensure safety & privacy of documents</h4>
        <div className="intro-btn-container">
          <Link href="/">
            <button className="btn">DOCs</button>
          </Link>
          <Link href="/">
            <button className="btn">Share</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeBg;
