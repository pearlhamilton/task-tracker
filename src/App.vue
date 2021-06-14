<template>
  <div class="container">
    <Header @toggle-form= "toggleForm" title="Task Tracker" :showAddTask = "showAddTask" />
    <div v-show="showAddTask">
    <AddTask @add-task = "addTask"/>
    </div>
    <Tasks @toggle-reminder= "toggleReminder" @delete-task= "deleteTask" :tasks="tasks"/>
    
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask

  },

  data(){
    return {
      tasks: [],
      showAddTask: false 
    }
  },
   
    methods:{

    async addTask(task){
      console.log(task)
      const res = await fetch('http://localhost:3000/tasks/', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" }
      
      })

      const data = await res.json()
      console.log(data)
      this.tasks = [...this.tasks, data]

    },

    deleteTask(id){
      this.tasks = this.tasks.filter((task) => task.id !== id)

    },

    toggleReminder(id){
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)

    },

    toggleForm(){
      this.showAddTask = !this.showAddTask
    }



  },


    async created() {
      const res = await fetch ('http://localhost:3000/tasks/')
      const data = await res.json()
      console.log(data)
      this.tasks = data.tasks

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
