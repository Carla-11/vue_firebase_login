<template>
  <div class="container">
    <h1 class="text-center mt-4">Inicio de Sesion</h1>
    <form @submit.prevent="loginUser" class="p-3">
      <div class="mb-3 mt-5">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Login",

  data() {
    return {
      email:"",
      password: ""
    };
  },

  methods: {
    loginUser() {
      if (this.email && this.password.length >= 6) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((results) => {
           console.log(results.user);
            console.log(results.user.uid);
            console.log(results.user.photoURL);
            console.log(results.user.email);
           console.log(results.user.displayName);
          console.log(results.user.emailVerified);
         
          this.$router.push({name: 'Home'});
          })
          .catch((error) => {
            console.log(error.code);
            console.log(error.message);
          });
      } else{
        console.log("no sirve");
      }
    },
  },
};
</script>