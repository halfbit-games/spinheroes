particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, // Количество частиц
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#a044ff", "#ffd700", "#ffffff"] // Цвета: фиолетовый, золотой, белый
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false // Отключаем линии, нужны только искры
    },
    "move": {
      "enable": true,
      "speed": 1, // Медленное движение
      "direction": "top", // Летят вверх, как искры
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    }
  },
  "retina_detect": true
});