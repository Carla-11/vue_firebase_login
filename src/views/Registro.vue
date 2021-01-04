<template>
  <div class="container my-5">
    <div class="alert alert-primary text-center" role="alert">
      <h3>Registro de Usuarios:</h3>
    </div>
    <form class="" @submit.prevent="registroUser">
      <div class="mb-3">
        <label for="displayName" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="displayName"
          v-model="displayName"
        />
      </div>

      <div class="mb-3">
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
       <div class="mb-3">
        <label for="photoURL" class="form-label">Foto URL:</label>
        <input
          type="text"
          class="form-control"
          id="photoURL"
          v-model="photoURL"
        />
      </div>
      <button type="submit" class="btn btn-primary">Registrar Usuario</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Registro",

  data() {
    return {
      email: "",
      displayName: "",
      password: "",
      photoURL: "",
    };
  },
  methods: {
    registroUser() {
      if (
        this.email &&
        this.displayName.length > 3 &&
        this.password.length >= 6 &&
        this.photoURL
      ) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((respuesta) => {
            return respuesta.user.updateProfile({
                displayName: this.displayName,
                photoURL: this.photoURL,
              })
              .then( () => {
                 this.email = "";
                 this.displayName = "";
                 this.password = "";
                 this.photoURL = "";
                console.log("user registrado");
                this.$router.push({ name: "Home" });
              })
              .catch( (error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            // ..
          });
      } else {
        console.log("no se puede");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>