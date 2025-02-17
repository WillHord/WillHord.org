import React from 'react';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const StarBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      // Regular stars
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 1.5,
        random: {
          enable: true,
          minimumValue: 0.5
        }
      },
      move: {
        enable: false
      }
    },
    // Shooting stars
    particles2: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "line"
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 1
        }
      },
      move: {
        enable: true,
        speed: 10,
        direction: "top-right",
        straight: true,
        out_mode: "out",
        path: {
          enable: true,
          delay: {
            value: 1
          },
          trail: {
            enable: true,
            length: 10,
            fillColor: "#ffffff"
          }
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default StarBackground;