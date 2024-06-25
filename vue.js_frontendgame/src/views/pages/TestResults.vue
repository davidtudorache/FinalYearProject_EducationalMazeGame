<template>
    <div>
        <br />
        <h1>{{ username }}'s Results</h1>
        <div v-for="(result,index) in results" :key="index" class="resultsTable">
            <p>{{ result.date_taken }} - Score: {{ result.score }}</p>
        </div>
    </div>
</template>

<script>
import { resultService } from '@/services/result.service';

export default {
data() {
    return {
        results: [],
        username: localStorage.getItem('username')
    };
},
created() {
    resultService.getAll()
    .then((data) => {
        //gets user id
        const user_id= parseInt(localStorage.getItem('user_id'));

        //filters to only show results assocaited with current user id
        this.results = data.filter((result) => result.user_id === user_id);
    })
    .catch((error) => {
        console.log("Error: "+error);
    })
}
}
</script>
  
<style>
.resultsTable {
  text-align: center;
  background-color: white;
  margin: auto;
  width: 40%;
  border: 3px solid #f1f1f1;
  padding: 10px;
}
</style>