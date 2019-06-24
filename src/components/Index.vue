<template>
  <div class="index container">
 <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <button @click="deletesmoothie(smoothie.id)">remove card</button>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '@/firebase/init';

export default {
  name: 'Index',
  data(){
    return{
      smoothies: [
      ]
    }
  
  },
   methods: {
    removeCard(id){
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id != id
      })
    },
    deletesmoothie(id){
      // delete doc from firestore DB
      console.log(id)
      db.collection('smoothies').doc(id).delete()
      .then(() => {
      // this delete the card from the front end
        this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id != id
        })
      }).catch(err => {
        console.log(err)
      })
    }

  },
   created(){
    // fetch data from firestore
    db.collection('smoothies').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        let smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push(smoothie)
      })
    })
  }
}
</script>

<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients{
  margin: 30px auto;
}
.index .ingredients li{
  display: inline-block;
}
</style>