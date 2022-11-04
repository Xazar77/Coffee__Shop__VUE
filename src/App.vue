<template>
  <div id="app">
      <router-view></router-view>
      <footer-component/>
      
  </div>
</template>

<script>
import HeroViews from '@/views/HeroViews.vue';
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    HeroViews,
    FooterComponent
  }
 
}
</script>

<style>

</style>
