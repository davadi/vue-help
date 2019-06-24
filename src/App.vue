<template>
  <div id="app">
    <Navbar />
    <router-view/>
        <Friends />
<OnlineF />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Friends from '@/components/Friends'
import OnlineF from '@/components/OnlineF'
export default {
  name: 'App',
  components: {
    Navbar, Friends , OnlineF
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
