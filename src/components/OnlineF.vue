<template>
    <div>
    <h2>Online Freinds</h2>  
    <div v-for="(onlinepeeps, index) in f" :key="index">
        <span v-if="onlinepeeps.online == 1">{{onlinepeeps.name}}</span>
        </div>  
    </div>
</template>
<script>
export default {
    name: 'OnlineF',
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
