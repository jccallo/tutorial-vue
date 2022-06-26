<template>
  <hr>
  <h1>Sintaxis de Plantilla</h1>

  <p>Interpolamos la propiedad <b>rawHtml</b>:<br> 
  <b>{{ rawHtml }}</b></p>

  <p>la cuando incluimos codigo HTML:<br>
  <span v-html="rawHtml"></span></p>

  <div :id="dynamicId">valor del atributo id: {{dynamicId}}</div>

  <button class="btn btn-primary" :disabled="isButtonDisabled">boton</button>

  <button class="btn btn-primary" @click="increment">{{ count }}</button>

  <h3>Recibiendo un objeto</h3>
  <p :id="post.id">id = {{post.id}}</p>
  <p :id="post.title">title = {{post.title}}</p>

  <h3>Recibiendo tosas las propiedades de un objeto y por separado</h3>
  <p :id="name">name = {{name}}</p>
  <p :id="company">company = {{company}}</p>

</template>

<script>
export default {
  // nombre del componente
  name: 'TemplateSyntax',

  // propiedades que se pasan al componente
  props: {
    rawHtml: String,
    dynamicId: Number,
    isButtonDisabled: Boolean,
    post: Object,
    name: String,
    company: String
  },

  // cuerpo de la instancia del componente
  data() {
    return {
      count: 0
    }
  },

  // metodos de la instancia del componente
  methods: {
    increment() {
      this.count++
    }
  },

  // al mostarse en el DOM
  mounted() {
    this.increment()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: green;
}
</style>
