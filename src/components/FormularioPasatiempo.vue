<template>
  <div class="row my-3">
    <div class="col-9">
      <div class="row" v-for="(pasatiempo, index) in pasatiempos" :key="index">
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
</template>

<script>
export default {
  name: "FormularioPasatiempo",
  data() {
    return {
      pasatiempos: [
        {
          nombre: "p1",
          tipo: "Informatica",
          lugar: "Oficina"
        }
      ]
    };
  },
  methods: {
    agregarPasatiempo: function() {
      this.$emit('add-pasatiempo', this.persona);
      console.log("enviarforlario")
    },
    pasa() {
      console.log(this.pasatiempos)
    }
  }
};
</script>
