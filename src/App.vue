<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #ff3aa4;
  --secondary-color: #03051f;
  --custom-grey: #cacaca;
  --contrast: #72beff;
}

#app {
  font-family: Maven Pro, Roboto Mono;
}

body {
  background: linear-gradient(140deg, #030618, #040614, #171d25);
  color: white;
  min-height: 100vh;
  background-attachment: fixed;
}

.primary {
  background-color: var(--primary-color);
  color: #FAFAFA;
}

.primary-text {
  color: var(--primary-color);
}

.contrast-text {
  color: var(--contrast);
}

.pixel-text {
  font-family: Pixelify Sans;
}

.custom-grey {
  background-color: var(--custom-grey);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

// animations
@keyframes revealImage {
  from {
    clip-path: inset(100% 0% 0% 0%);
  }

  to {
    clip-path: inset(0% 0% 0% 0%);
  }
}

@keyframes hideImage {
  from {
    clip-path: inset(0% 0% 0% 0%);
  }

  to {
    clip-path: inset(100% 0% 0% 0%);
  }
}

.image-carousel {
  // position: absolute;
  // width: 300px; /* Ajusta según tu imagen */
  height: auto;
  animation: revealImage 1s ease-in-out, hideImage 0.8s ease-in-out 4.3s forwards;
}

// butons
.btn {
  font-family: VT323, Roboto Mono;
  background: #7C7C7C;
  border-bottom: 6px inset rgba(0, 0, 0, .5);
  border-left: 6px inset rgba(0, 0, 0, .5);
  border-right: 6px inset rgba(255, 255, 255, .5);
  border-top: 6px inset rgba(255, 255, 255, .5);
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 2.2rem;
  margin: 1rem;
  padding: 0px 15px;
  text-transform: uppercase;
  width: auto;

  &:focus,
  &:hover {
    background: #BCBCBC;
  }
}

.btn.primary {
  background: var(--primary-color);
  color: white;

  &:focus,
  &:hover {
    border: 6px inset rgba(0, 0, 0, .2);
  }
}

.btn.secondary {
  background: #aaaaaa;
  color: var(--secondary-color);

  &:focus,
  &:hover {
    border: 6px inset rgba(0, 0, 0, .2);
  }
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: rgb(255, 255, 255);
  color: var(--secondary-color);
  text-align: center;
  padding: 5px 10px;
  font-size: 20px;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: -20%;
  right: -50%;
  white-space: nowrap;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

// scroll
// scroll
::-webkit-scrollbar {
  width: 6px; /* Ancho vertical */
  height: 10px; /* Ancho horizontal */
}

/* Color del track (fondo de la barra) */
::-webkit-scrollbar-track {
  background: #1a1a1a; /* Fondo oscuro */
  border-radius: 5px;
}

/* Estilo de la barra deslizante (thumb) */
::-webkit-scrollbar-thumb {
  background: var(--contrast); /* Color de la barra */
  border-radius: 5px;
  border: 2px solid #1a1a1a; /* Espaciado */
}

/* Hover sobre la barra */
::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
