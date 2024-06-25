<template>
  <div>
    <br>
    <iframe ref="gameFrame" src="/src/views/pages/gameCode/game.html" frameborder="0" width="100%" height="750px"></iframe>
  </div>
</template>

<script>
import { scoreService } from "@/services/score.service";

export default {
  data() {
    return {
      scores: []
    };
  },
  mounted() {
    this.getAllScores();
    window.addEventListener('message', this.addScore);
  },
  methods: {
    getAllScores() {
      scoreService.getAll()
        .then(scores => {
          //get all scores and convert JSON string
          this.scores = scores;
          const scoresStr = JSON.stringify(scores);
          //send score 
          const gameFrame = this.$refs.gameFrame;
          gameFrame.addEventListener('load', () => {
            //sends message after iframe loaded to stop async error
            gameFrame.contentWindow.postMessage({ scores: scoresStr}, '*');
          })
          
        })
        .catch(error => {
          console.log('Erorr:',error);
        }
      );
    },
    addScore(message) {
      //if message recieved is add score
      if (message.data && message.data.type === 'addScore') {
        //split score into indivdual vars
        const { username, user_id, level, score } = message.data.score;
        //add score to backend
        scoreService.add(username, user_id, level, score)
          .then(response => {
            console.log('Score added successfully:', response);
          })
          .catch(error => {
            console.log('Error:', error);
          }
        )
      }
    }
  }

}
</script>