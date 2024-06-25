<template>
  <div>
    <div class="headerClass">
      <nav>
        <a href="/" class="button">Game</a>
        <a v-if="!showLogout" @click="goToLogin()" class="button">Login</a>
        <a v-if="!showLogout" @click="goToSignUp()" class="button">Sign Up</a>
        <a v-if="showLogout"  @click="goToTest()" class="button">Test</a>
        <a v-if="showLogout"  @click="goToTestResults()" class="button">Test Results</a>
        <a v-if="showLogout" @click="logout" class="button">Logout</a>
      </nav>
      <router-view v-on:mouseenter="renderNavbar()"  />
    </div>
  </div>
</template>

<script>
  import { usersService } from '../services/user.service'

  export default {
    data() {
      return {
        showLogout: false
      }
    },
    methods: {
      goToLogin() {
        this.$router.push("/login")
      },
      goToSignUp() {
        this.$router.push("/signup")
      },
      goToTest() {
        this.$router.push("/test")
      },
      goToTestResults() {
        this.$router.push("/testresults")
      },
      logout() {
        usersService.logOut()
          .then(result => {
            console.log("logout successful");
            this.$router.push("/")
            alert("User logged out")
          })
          .catch(error => {
            this.error = error;
            return
          })
      },
      renderNavbar(){
        if(localStorage.getItem('user_id') != null) {
          this.showLogout = true;
        }
        else {
          this.showLogout = false;
        }
      }
    },
    created() {
      this.renderNavbar();
    }
  }
</script>

<style>
body {
  background-color: lightgray;
}
.headerClass {
  height: 20%;
  text-align: center;
  font: 500 1rem 'Quicksand', sans-serif;
}

a.button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  text-decoration: none;
  width: 35%;
}

a.button:hover {
  opacity: 0.8;
  text-decoration: underline;
}

</style>