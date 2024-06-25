<template>
  <div>
    <br><br>
    <form>
      <!-- loop through selected questions -->
      <div v-for="(question, index) in selectedQuestions" :key="index" class="question">
        <h1>Question {{ index+1 }}</h1>
        <!-- display question -->
        <div class="question-text"> {{ question.text }} </div>
        <!-- loop through options for each question -->
        <div v-for="(option, optionIndex) in question.options" :key="optionIndex" class="option-label">
          <!-- put radio button every option for each question -->
          <input type="radio" :value="option.value" v-model="testAnswers[index]">
          <!-- label radio button for each question -->
          <label>{{ option.label }}</label>
        </div>
      </div>
      <!-- submit answers button -->
      <button @click="checkAnswers">Submit</button>
    </form>
  </div>

</template>

<script>
import { questionsData} from '@/services/questions.js';
import { resultService } from "@/services/result.service.js";

export default {
  data() {
    return {
      testAnswers: Array(10).fill(''), //ten questions per test
      selectedQuestions: this.getRandomQuestions(),
    };
  },
  methods: {
    getRandomQuestions() {
      const randomQuestions = questionsData.sort(() => Math.random() - 0.5); //shuffles question array and randomises it
      return randomQuestions.slice(0, 10); //Select 10 of randomised questions
    },
    checkAnswers() {
      let score = 0;

      this.testAnswers.forEach((testAnswers, index) => { //for each question in test answers arr
        //check if answer is the correct one
        const correctAnswer = this.selectedQuestions[index].correctAnswer;

        if (testAnswers === correctAnswer) {
          score++;
        }
      });
      //store player results in result db
      const user_id = localStorage.getItem('user_id');
      
      resultService.add(user_id, score)
        .then(() => {
          alert(`Your score: ${score}`);
        })
        .catch((error) => {
          console.log('Error adding result: '+error);
        })
      this.$router.push("/testresults");
    }
  }
}
</script>

<style>
form {
  text-align: center;
  background-color: white;
  margin: auto;
  width: 40%;
  border: 3px solid #f1f1f1;
  padding: 10px;
}
.question {
  margin-bottom: 10%;
  text-align: left;
}

.question-text {
  margin-bottom: 8%;
}

.options {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.option-label {
  display: flex;
  align-items: center;
  margin-bottom: 5%;
}

button {
background-color: #04AA6D;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 35%;
}

button:hover {
opacity: 0.8;
}
</style>