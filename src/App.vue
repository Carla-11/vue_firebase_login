<template>
  <div id="">
    <div id="">
    <NavBar></NavBar>
 
    </div>
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
import firebase from 'firebase';
export default {
  components: {
    NavBar,
  },
  name: 'App',
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
     this.$store.dispatch('user',user);
        console.log("login auten");
        console.log(user.uid);
      
    } else {
      console.log("cierre se sesion signout");
         this.$store.dispatch('user',null);
    }
   });
  },
}
</script>

<style lang="scss">

</style>
