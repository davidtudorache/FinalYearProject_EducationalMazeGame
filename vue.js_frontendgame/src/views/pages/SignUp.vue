<template>
    <form @submit.prevent="handleSubmit()">
        <h2>Create an Account</h2>

        <br>
        <label for="username">Username: </label>
        <input type="text" name="username" v-model="username"/>
        <div v-show="submitted && !username"><strong>Username is required</strong></div>

        <br /><br />

        <label for="password">Password: </label>
        <input type="password" name="password" v-model="password"/>
        <div v-show="submitted && !password"><strong>Password is required</strong></div>

        <br><br>

        <div class="consent">
          <div class="consentChecks">
            <input type="checkbox" id="infoSheetConsent" v-model="infoConsent">
            <br><br><br><br><br><br><br><br><br>
            <input type="checkbox" id="participationSheetConsent" v-model="participateConsent">
            <br><br><br><br>
            <input type="checkbox" id="agreeSheetConsent" v-model="agreeConsent">
          </div>
          <div class="consentLabels">
            <label for="infoSheetConsent">
              I confirm that I have read and understand the <router-link to="/infosheet" style="text-decoration: none">information sheet<sup>(↗)</sup></router-link> 
              dated [05/03/24] (version [0.01]) for the above study. I have had the opportunity to consider
              the information, ask questions and have had these answered satisfactorily.
            </label>
            <br><br><br>
            <label for="participationSheetConsent">
              I understand that my participation is voluntary and that I am free to withdraw at any time without
              giving any reason, without my medical care or legal rights being affected.
            </label>
            <br><br>
            <label for="agreeSheetConsent">
              I agree to take part in the above study.
            </label>
          </div>
        </div>

        <button>Create Account</button>
        <div v-if="error"><strong>{{ error }}</strong></div> 
        <br />
        <router-link to="/login">Have an account? Login.</router-link>
    </form>
</template>

<script>
import { usersService } from "@/services/user.service";
import { RouterLink } from "vue-router";

  export default {
      data(){
          return {
            username: "",
            password: "",
            error: "",
            submitted: false,
            infoConsent: false,
            participateConsent: false,
            agreeConsent: false
          }
      },
      methods: {
          handleSubmit(){
            this.submitted = true;
              let consent = this.checkConsent();
              this.error = ""
              const {username, password} = this

              if (consent == false) {
                this.error = "Must agree to all study terms and conditions before account can be created"
                return;
              }

              if(!(username && password)){
                this.error = "User already exists"
                return;
              }

              const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
              if(!(password_pattern.test(password))){
                  this.error = "Password not strong enough."
                  return;
              }
              
              usersService.addNewUser(username, password)
                .then(result => {
                console.log("New user added")
                alert("New Account created successfully.")
                this.$router.push("/login")
                })
                .catch(error => {
                console.log("failed to create new user")
                alert("New Account not created.")
                this.error = error;
                })
          },
          checkConsent() {
            var infoConsent = this.infoConsent;
            var participateConsent = this.participateConsent;
            var agreeConsent = this.agreeConsent;

            if (infoConsent && participateConsent && agreeConsent) {
              return true;
            }
            else {
              return false;
            }
          }
      }
  }
</script>

<style scoped>
form {
    text-align: center;
    background-color: white;
    margin: auto;
    width: 35%;
    border: 3px solid #f1f1f1;
    padding: 10px;
    margin-top: 5%;
}

/* Full-width inputs */
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

  /* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 35%;
}
  
/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

.consent {
  display: inline-flex;
  flex-direction: row;
}

.consentChecks {
  margin-right: 10%;
  align-items: center;
}
.consentLabels {
  width: 70%;
  text-align: center;
}

label sup {
  font-size:xx-small; 
}
</style>