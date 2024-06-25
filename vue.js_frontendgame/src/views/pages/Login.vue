<template>
    <form @submit.prevent="handleSubmit">
        <h2>Login</h2>

        <br>

        <label for="username">Username: </label>
        <input type="text" name="username" v-model="username"/>
        <div v-show="submitted && !username"><strong>Username is required</strong></div>

        <br /><br />

        <label for="password">Password: </label>
        <input type="password" name="password" v-model="password"/>
        <div v-show="submitted && !password"><strong>Password is required</strong></div>

        <button>Login</button>
        <div v-if="error"><strong>{{ error }}</strong></div>  
        <br />
        <router-link to="/signup">Don't have an account? Create account</router-link>
    </form>
</template>

<script>
import { usersService } from "@/services/user.service";

  export default {
      data(){
          return {
              username: "",
              password: "",
              error: "",
              submitted: false
          }
      },
      methods: {
          handleSubmit(e){
              this.submitted = true
              const {username, password} = this

              if(!(username && password)){
                return;
              }
              //Error: Regex used to check password doesn't work as intended
              //Replace with something else
              const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
              if(!(password_pattern.test(password))){
                  this.error = "Password not strong enough."
                  return;
              }
              usersService.login(username, password)
              .then(result => {
                console.log("login successful");
                this.$router.push("/")
                alert("Login successful")
                    })
              .catch(error => this.error = error)
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
</style>