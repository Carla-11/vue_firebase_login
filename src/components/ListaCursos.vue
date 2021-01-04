<template>
  <div class="container my-5">
    <div
      class="alert alert-primary text-center"
      role="alert"
      v-if="enviandoUser"
    >
      <h1>Bienvenido Querido : {{ enviandoUser.displayName }}</h1>
      <div class="card" style="width: 18rem">
        <img :src="enviandoUser.photoURL" class="card-img-top" :alt="enviandoUser.displayName" />
        <div class="card-body">
          <h5 class="card-title"> Nombre de usuario: {{ enviandoUser.displayName}}</h5>
          <p class="card-text">
           Correo Electronico : {{ enviandoUser.email }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-primary text-center" role="alert">
        <h1>hola mundo a todos</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ListaCursos",
  computed: {
    ...mapGetters(["enviandoUser"]),
  },
};
</script>

<style scoped lang="scss">
</style>
