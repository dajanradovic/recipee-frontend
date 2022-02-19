import axios from 'axios';

export default class ApiHandler {

     #baseUrl = 'http://localhost:3000/api'   
     #headers = {
         'Content-Type' : 'application/json',
         'Accept' : 'application/json'
     }

    async getAllRecipees(pageNumber = 1, searchInput){
       console.log(searchInput)
      if(searchInput){

         let result = await axios.get(`http://localhost:3000/api/recipees?page=${pageNumber}&name=${searchInput}&ingridients=${searchInput}`, this.headers);

         return result.data;
      }
      
       let result = await axios.get(`http://localhost:3000/api/recipees?page=${pageNumber}`, this.headers);

       return result.data;
 
    }

    async getSingleRecipee(id){

        let result = await axios.get(`http://localhost:3000/api/recipees/${id}`, this.headers);
 
        return result.data;
   
     }


     async createRecipee(description, name, ingridients){
       
        let result = await axios.post(`http://localhost:3000/api/recipees`, {description, name, ingridients}, this.headers);
 
        return result.data;
       
   
     }

     async updateRecipee(description, name, ingridients, id){
       
      let result = await axios.put(`http://localhost:3000/api/recipees/${id}`, {description, name, ingridients}, this.headers);

      return result.data;
     
 
   }

     async deleteRecipee(id){
       
      let result = await axios.delete(`http://localhost:3000/api/recipees/${id}`, {}, this.headers);

      return result.data;
      
   }

   async searchRecipees(pageNumber = 1, inputValue){
       
      let result = await axios.get(`http://localhost:3000/api/recipees?page=${pageNumber}&name=${inputValue}&ingridients=${inputValue}`, this.headers);

      return result.data;


   }
 

               
 
     

}