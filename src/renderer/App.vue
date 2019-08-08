<template>
   <div class="page-container">
      <md-app>
        <md-app-toolbar >
          <span>Routename: {{$route.name}}<br/>Routepath: {{$route.fullPath}}</span>
        </md-app-toolbar>
        
        <md-app-content>
          <router-view></router-view>
        </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'dsa5heldentool'
  }
</script>

<style lang="scss">

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200), // The primary color of your application
  accent: md-get-palette-color(red, 500), // The accent or secondary color
  theme: light // This can be dark or light
));
@import '~vue-material/dist/vue-material.css';
@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
