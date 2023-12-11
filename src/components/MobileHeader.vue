<template>
<header class="header">
  <div class="container">
    <div class="wrapper">
      <a href="/" class="header__logo">{alexanderfilip}</a>  
      <button class="menu" @click="toggleAriaExpanded" aria-label="Main Menu">
        <svg class="burgermenu" width="50" height="100" viewBox="0 0 100 100">
          <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path class="line line2" d="M 20,50 H 80" />
          <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
    </div>
      <transition name="fade">
      <div v-if="ariaExpanded">
      <aside aria-hidden="false" tabindex="1" class="menu__sitebar navbar">
      <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="mailto:filip.alexandru2003@gmail.com">Contact</a></li>
        <li><a href="/resume.pdf" class="header__anchor">Resume</a></li>
        </ul>
      <div class="social__links">
        <ul>
          <li>
          <a :href="this.$store.state.github">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill="#fff"/>
          </svg>
        </a>
      </li>
      <li>
        <a :href="this.$store.state.linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <g clip-path="url(#clip0_14_33)">
            <path d="M15.0001 0.599976C7.0471 0.599976 0.600098 7.04698 0.600098 15C0.600098 22.953 7.0471 29.4 15.0001 29.4C22.9531 29.4 29.4001 22.953 29.4001 15C29.4001 7.04698 22.9531 0.599976 15.0001 0.599976ZM11.4751 20.9685H8.5591V11.5845H11.4751V20.9685ZM9.9991 10.4325C9.0781 10.4325 8.4826 9.77997 8.4826 8.97297C8.4826 8.14948 9.0961 7.51648 10.0366 7.51648C10.9771 7.51648 11.5531 8.14948 11.5711 8.97297C11.5711 9.77997 10.9771 10.4325 9.9991 10.4325ZM22.1251 20.9685H19.2091V15.768C19.2091 14.5575 18.7861 13.7355 17.7316 13.7355C16.9261 13.7355 16.4476 14.292 16.2361 14.8275C16.1581 15.018 16.1386 15.288 16.1386 15.5565V20.967H13.2211V14.577C13.2211 13.4055 13.1836 12.426 13.1446 11.583H15.6781L15.8116 12.8865H15.8701C16.2541 12.2745 17.1946 11.3715 18.7681 11.3715C20.6866 11.3715 22.1251 12.657 22.1251 15.42V20.9685Z" fill="#FFF
            "/>
            </g>
          <defs>
            <clipPath id="clip0_14_33">
              <rect width="30" height="30" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        </a>
      </li>
        </ul>
      </div>
      </nav>
      </aside>
      </div>
      </transition>
  </div>
</header>

</template>

<script>
  export default {    data() {
      return {
        ariaExpanded: false
      }
    },
    methods: {
      toggleAriaExpanded() {
        this.ariaExpanded = !this.ariaExpanded;
        this.$el.classList.toggle('opened');
        this.$emit('toggle-navbar-panel');
      }
    },
  }
</script>

<style scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #112240;
  z-index: 999;
}

.header__logo {
  font-size: 1.75rem;
  color: #fff;
  margin-right: auto;
}

.wrapper {
  display: flex;
  align-items: center;
}

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  position: relative;
  z-index: 1001;
}
.line {
  fill: none;
  stroke: rgb(255, 255, 255);
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.burgermenu {
  position: relative;
  display: inline-block;
}

@media (max-width: 768px) {
.navbar {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    padding: 50px 10px;
    width: 50%;
    height: 100vh;
    outline: 0px;
    background-color: #112240;
    box-shadow: -10px 0px 30px -15px blue;
    z-index: 1000;
    transform: translateX(0vw);
    visibility: visible;
    transition: var(--transition);

    
}
.navbar li {
  margin-bottom: 50px;
}
.navbar li a {
  color: #fff;
  font-size: 20px;
  text-decoration: none;}
}
@media (min-width: 768px) and (max-width: 1000px) {
.navbar {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    padding: 50px 10px;
    width: 100%;
    height: 15%;
    outline: 0px;
    background-color: #112240;
    box-shadow: -10px 0px 30px -15px blue;
    z-index: 9;
    transform: translateX(0vw);
    visibility: visible;
    transition: var(--transition);
}
.navbar li {
  margin-bottom: 10px;
};
.navbar li a {
  font-size: 16px;
}
nav ul,
nav {
  display: flex;
  align-items: center;
  gap: 20px;
}
}

.navbar li a {
  text-decoration: none;
  color: #fff;
}

.fade-enter-active, .fade-leave-active {
transition: opacity 0.01s;
}
.fade-enter, .fade-leave-to {
opacity: 0;
}

.navbar__menu {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.social__links ul {
  display: flex;
  align-items: center;
  gap: 15px;
}

.navbar__logo {
  font-size: 30px;
  font-style: italic;
  margin-right: auto;
}
.navbar__list {
  display: flex;
  gap: 80%;
}
</style>