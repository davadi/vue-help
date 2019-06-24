<template>
    <div>
    <h2>This is an exmaple of a for loop and using a method and using props</h2>  
    <div v-for="(f, index) in f" :key="index">
        <span> {{f.name}}</span>
        <div>{{greet(f.name)}}</div>
        </div>  
     <button>Hi click me </button>
  <button v-on:click="greet">Greet</button>

    </div>
</template>
<script>
export default {
    name: 'Friends',
    //you have to bind the data, you have to add the props
    props: ['f'],
    data() {
        return {
      

        }},
      // this is to add functions 

 methods: {
    greet: function (name) {
      // `this` inside methods point to the Vue instance
      console.log('Hello ' + name + '!')
      // `event` is the native DOM event
    
}

    }
}
</script>
<style>

</style>
