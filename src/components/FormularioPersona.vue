<template>
  <div id="formulario-persona">
    <form @submit.prevent="enviarFormulario">
      <div class="row my-3">
        <div class="col">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Nombre" v-model="persona.nombre" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Apellido" v-model="persona.apellido" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" v-model="persona.email" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Agregar Persona</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h4>Pasatiempos</h4>
        </div>
      </div>
      <!-- pasatiempos -->
      <div class="row my-3">
        <div class="col-9">
          <div class="row" v-for="(pasatiempo, index) in persona.pasatiempos" :key="index">
            <div class="col"><input type="text" class="form-control float-left mb-2" placeholder="Nombre" v-model="pasatiempo.nombre" /></div>
            <div class="col"><input type="text" class="form-control float-left mb-2" placeholder="Tipo" v-model="pasatiempo.tipo" /></div>
            <div class="col"><input type="text" class="form-control float-left mb-2" placeholder="Lugar" v-model="pasatiempo.lugar" /></div>
            <div class="col-1"><a class="btn btn-primary" v-on:click.stop="eliminarPasatiempo(index)">X</a></div>
          </div>
        </div>
        <div class="col-3">
          <div class="form-group">
            <a class="btn btn-primary" @click.stop="agregarPasatiempo">Agregar Pasatiempo</a>
          </div>
        </div>
      </div>
      
    </form>
  </div>
</template>

<script>
// import FormularioPasatiempo from './FormularioPasatiempo.vue';

export default {
  name: "formulario-persona",
  props: {
    person: Object
  },
  components: {
    // FormularioPasatiempo
  },
  data() {
    return {
      persona: {
        nombre: this.person.nombre,
        apellido: this.person.apellido,
        email: this.person.email,
        pasatiempos: this.person.pasatiempos
      },
    };
  },
  methods: {
    enviarFormulario: function() {
      this.$emit('add-persona', this.persona);
      this.persona = {
        nombre: "Armando",
        apellido: "Morales",
        email: "amorales@gmail.com",
        pasatiempos: [
          {
            nombre: "p1",
            tipo: "p1",
            lugar: "p1"
          }
        ]
      }
      console.log("enviarforlario")
    },
    agregarPasatiempo: function() {
      this.persona.pasatiempos.push({
            nombre: "",
            tipo: "",
            lugar: ""
          });
    },
    eliminarPasatiempo: function(id) {
      this.persona.pasatiempos.splice(id, 1);
    },
    // actualizarPasatiempo: function(index, nombre) {
    //   console.log(index, nombre)
    // }
  }
};
</script>

<style scoped>
</style>