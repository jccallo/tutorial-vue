<template>
  <hr />
  <h1>Propiedades Calculadas</h1>

  <!-- primero setea el valor de fullName luego obtiene el valor de fullName -->
  <!-- No es recomendable setear las propiedades computadas  -->
  <p>Nombre completo: {{ fullName = "John2 Doe2" }}</p>

  <!-- propiedad computada de solo lectura -->
  <p>
    Cantidad de libros punlicados: <span>{{ publishedBooksMessage }}</span>
  </p>
</template>

<script>
export default {
  // nombre del componente
  name: "PropiedadesCalculadas",

  // cuerpo de la instancia del componente
  data() {
    return { // inicia
      author: {
        firstName: "John",
        lastName: "Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    }; // termina
  },

  // propiedades calculadas
  computed: {
    // propiedad calculada de solo lectura (recomendado)
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },

    // propiedad calculada grabable (no recomendado)
    fullName: {
      get() {
        // imprimimos el valor de ese momento que devuelve 
        console.log(this.author.firstName + " " + this.author.lastName)

        // obtiene nombre completo
        return this.author.firstName + " " + this.author.lastName;
      },
      set(newValue) {
        // setea nuevos valores a firstName y lastName
        [this.author.firstName, this.author.lastName] = newValue.split(" ");

        // imprimimos el valor de ese momento que establece 
        console.log(this.author.firstName + " " + this.author.lastName)
      },
    },
  },

  // antes de montarse en el DOM
  beforeMount() {
    console.log(this.author.firstName + " " + this.author.lastName)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: green;
}
</style>