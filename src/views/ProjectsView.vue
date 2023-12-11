<template>
<div class="container">
      <div class="row row-cols-2 project__wrapper">
            <div class="col project__box">
              <ProjectComponent 
                img='https://i.imgur.com/8pgLcrI.png'
                title="Weather App"
                description="This is a Vue project that allows you to get the weather information of any city in the world. You can enter the city name in the input field and click the button to see the temperature, feels like, minimum and maximum temperature values. The project uses axios to make an API call to the OpenWeatherMap service and displays the data in a responsive layout. "
                githubProject="https://github.com/alexanderfilip1/meteo-vuejs"
                stack="HTML, CSS, JS, Vue"
                />
            </div>
            <div class="col project__box">
              <ProjectComponent 
                img='https://i.imgur.com/bfNQruX.png'
                title="Portfolio Website"
                description="The website showcases his portfolio, skills, services, and contact information. The website is built with HTML, CSS, JavaScript, and Bootstrap.
                he website has a simple and elegant design, with a dark theme and a responsive layout. The website also has some animations and transitions to enhance the user experience."
                githubProject="https://github.com/alexanderfilip1/sw1ngaf.github.io"
                stack="HTML, CSS, JS, PHP"
                />
            </div>
            <div class="col project__box">
              <ProjectComponent 
                img='https://i.imgur.com/8yvPnAr.png'
                title="Architecture Website"
                description="The website is a landing page for a fictional company called Omnifood, which delivers healthy and organic food to customers.
                The website has a modern and attractive design, with a light theme and a responsive layout. This is my first website i made."
                githubProject="https://github.com/alexanderfilip1/css_final"
                stack="HTML, CSS"
                />
            </div>
            <div class="col project__box">
              <ProjectComponent 
                img='https://i.imgur.com/W4SQo6g.png'
                title="Quiz Game Website"
                description="This is a simpe Quiz Game made with Javascript. The project has a simple and user-friendly interface, with colorful buttons and images. User can see the statistics and achievements on the main menu, and also can see the correct answers after the game ends. "
                githubProject="https://github.com/alexanderfilip1/quiz-game"
                stack="HTML, CSS, JS, SCSS"
                />
            </div>
          </div>
    </div>
</template>

<script>
import ProjectComponent from '@/components/ProjectComponent.vue';

export default {
  components: { ProjectComponent }
}
</script>

<style>

</style>