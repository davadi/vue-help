<template>
    <div>
    <h2>You are using a if statment in this component</h2>  
    <div v-for="(f, index) in f" :key="index">
        <!-- an if statment -->
         <span v-if="f.online == 1">{{f.name}}</span>
        </div>  
    </div>
</template>
<script>
export default {
    name: 'OnlineF',
        //you have to bind the data, you have to add the props
props: ['f'],
    data() {
        return {
         

        }
    }
}
</script>
<style>

</style>
