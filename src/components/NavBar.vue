<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Login'}">Login</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Registro'}">Registro</router-link> 
        </li>
        <li class="nav-item">
          <a class="nav-link " :class="activeSingOut" href="#" tabindex="-1" :disabled="exiteUser" @click="signOut">SingOut</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</div>  
</template>

<script>
import firebase from 'firebase';
import {mapGetters} from "vuex";
export default {
 name: 'NavBar',
 computed: {
   ...mapGetters(['enviandoUser']),

   exiteUser(){

     return !this.enviandoUser;
   },

   activeSingOut(){

     return this.exiteUser ? 'disabled' : '';
   }
 },

 methods: {
  
  signOut(){
     firebase.auth().signOut().then(() => {
      console.log("cerro sesion");
      this.$router.push({name: 'Login'})
    }).catch((error) => {
     console.error(error);
   });

  }
},


}

</script>

<style>

</style>