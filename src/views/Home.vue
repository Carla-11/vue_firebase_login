<template>
  <div class="home">
   
    <ListaCursos/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaCursos from '@/components/ListaCursos.vue'

export default {
  name: 'Home',
  components: {
    ListaCursos
  }
}
</script>
