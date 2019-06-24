<template>
    <div>
    <h2>Freinds</h2>  
    <div v-for="(myfriends, index) in f" :key="index">
        <span>{{myfriends.name}}</span>
        </div>  
    </div>
</template>
<script>
export default {
    name: 'Friends',
    data() {
        return {
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

</style>
