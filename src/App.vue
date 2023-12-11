<template>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.8"
        :particlesNumber="110"
        shapeType="circle"
        :particleSize="3"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      />

      <mobile-component v-if="width < 1000"></mobile-component>
<!-- Afișează alt component dacă lățimea este mai mare sau egală cu 1000 -->
<HomeComponent v-else></HomeComponent>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue';
import MobileComponent from './components/MobileComponent.vue';

export default {
    components: { HomeComponent, MobileComponent },
    data() {
return {
// Inițializează lățimea cu valoarea curentă a ferestrei
width: window.innerWidth
};
},
mounted() {
// Adaugă un ascultător de eveniment pentru redimensionarea ferestrei
window.addEventListener("resize", this.handleResize);
},
beforeUnmount() {
// Elimină ascultătorul de eveniment la distrugerea componentului
window.removeEventListener("resize", this.handleResize);
},
methods: {
// Actualizează lățimea la fiecare redimensionare a ferestrei
handleResize() {
this.width = window.innerWidth;
}
}
}

</script>

<style>

html {cursor: pointer;}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  cursor: auto;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html {
  scroll-behavior: smooth;
}
body { 
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  animation: fade-in 1.2s ease-in-out;
  font-family: 'Roboto Condensed';
}

@keyframes fade-in {
from {
opacity: 0;
}
to {
opacity: 1;
}
}

#particles-js{
  width: 100%;
  height: 100%;
  background-color: #0a192e;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
}
</style>
