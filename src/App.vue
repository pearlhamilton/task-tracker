<template>
  <div class="container">
    <Header title="Task Tracker"/>
    <AddTask @add-task = "addTask"/>
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
      tasks: []
    }
  },
   
    methods:{

    addTask(task){
      this.tasks = [...this.tasks, task]

    },

    deleteTask(id){
      this.tasks = this.tasks.filter((task) => task.id !== id)

    },

    toggleReminder(id){
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)

    }



  },

    created() {
      this.tasks = [{
      "id": "1",
      "text": "Doctors Appointment",
      "day": "March 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": "2",
      "text": "Meeting with boss",
      "day": "March 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": "3",
      "text": "Food shopping",
      "day": "March 7th at 2:00pm",
      "reminder": false
    }]

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
