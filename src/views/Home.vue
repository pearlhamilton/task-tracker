<template>
    <AddTask v-show="showAddTask" @add-task = "addTask"/>
  
    <Tasks @toggle-reminder= "toggleReminder" @delete-task= "deleteTask" :tasks="tasks"/>
    
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default{
     name: 'Home',
     props: {
         showAddTask: Boolean
     },
     components: {
         Tasks,
         AddTask
     },
     data(){
         return {
              tasks: []
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

    async deleteTask(id){
      const res = await fetch(`http://localhost:3000/tasks/${id}`,{
        method: 'DELETE'
      })
      this.tasks = this.tasks.filter((task) => task.id !== id)

    },

    async toggleReminder(id){
      const res = await fetch(`http://localhost:3000/tasks/${id}`, { method: 'PATCH'
      })
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)

    },




    async created() {
      const res = await fetch ('http://localhost:3000/tasks/')
      const data = await res.json()
      console.log(data)
      this.tasks = data.tasks 

    }
    }

}
 
</script>
