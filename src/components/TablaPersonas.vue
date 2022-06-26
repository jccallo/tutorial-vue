<template>
  <div id="tabla-personas">
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Pasatiempos</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="persona in personas" :key="persona.id">
          <td>{{ persona.nombre}}</td>
          <td>{{ persona.apellido }}</td>
          <td>{{ persona.email}}</td>
          <td>
            <ul>
              <li v-for="(pasatiempo, index) in persona.pasatiempos" :key="index">{{index + 1}}. {{pasatiempo.nombre}} {{pasatiempo.tipo}} {{pasatiempo.lugar}}</li>
            </ul>
          </td>
          <td>
            <a class="btn btn-success" @click="accion(persona.id)">Editar</a>
            <a class="btn btn-danger">Eliminar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tabla-personas",
  props: {
    personas: Array
  },
  methods: {
    accion: function(id) {
      this.$emit('edit-persona', id);
    }
  }
};
</script>

<style scoped>
</style>