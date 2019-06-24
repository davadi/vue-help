<template>
  <div id="app">
    <!-- the navbar is a basic compent,  -->
<Navbar />
    <router-view/>
 <Friends :f="f"  />
     <!-- You bind the data using :, in this case, the data you binded was f, see the created element below -->
 <OnlineF :f="f"  />

  </div>
</template>

<script>
//you always have to import the compoment
import Index from '@/components/Index'
import Navbar from '@/components/Navbar'
import Friends from '@/components/Friends'
import OnlineF from '@/components/OnlineF'
export default {
  name: 'App',
  //you always have to add the componment
components: {
    Navbar, Friends , OnlineF , Index
  },
  data() { return {
    //this is binding data, see above
     f: [
          {name:"chad",online:0},
          {name:"steve",online:1},
          {name:"mike",online:0}
      ] 

  }
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
