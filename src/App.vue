<template>
  <div class="container">
    <Header @toggle-form= "toggleForm" title="Task Tracker" :showAddTask = "showAddTask" />
      <router-view :showAddTask= "showAddTask"></router-view>
    <Footer/>
    
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer

  },

  data(){
    return {
      showAddTask: false 
    }
  },
   
    methods:{

    toggleForm(){
      this.showAddTask = !this.showAddTask
    }



  },


}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

</style>
