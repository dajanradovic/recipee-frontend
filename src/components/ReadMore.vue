<template>
<div>
    <h1>{{name}}</h1>
    <p>{{description}}</p>
    <div class="row">
          <div v-for="ingridient in ingridientsList" :key="ingridient" class="chip">{{ingridient}}</div>
    </div>
</div>
</template>

<script>
import ApiHandler from '../handlers/ApiHandler.js'
let apiHandler = new ApiHandler()


export default {
  data(){
      return{
          name: '',
          description: '',
          ingridientsList: []
        
      }
  },
  mounted(){
    
    const id = this.$route.params.id
    if(id){
      
      this.editMode = true
      try{
        apiHandler.getSingleRecipee(id).then(res=>{
            this.name = res.data.name
            this.description = res.data.description
            this.ingridientsList = res.data.ingridients
           })
      }catch(err){
          console.log(err.response.data)
            }

    }

  }
}
</script>

<style scoped>



</style>
