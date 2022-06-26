<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <!-- HelloWorld -->
  <HelloWorld msg="Hola Mundo en VueJS" />

  <!-- TemplateSyntax -->
  <!-- texto estatico se pasa normal pero todo lo demas se pasa usandno v-bind o : -->
  <TemplateSyntax
    rawHtml='<span style="color: red">Esto debe ser red.</span>' 
    :dynamicId="1 > 0 ? 'Male' : 'Female'"
    :isButtonDisabled="true"
    :post="{ id: 1, title: 'Mi viaje con vue' }"
    v-bind="{
      name: 'Veronica',
      company: 'Veridian Dynamics',
    }"
  />

  <!-- PropiedadesCalculadas -->
  <PropiedadesCalculadas></PropiedadesCalculadas>

  <!-- Personas -->
  <hr />
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-persona :person="persona" @add-persona="agregarPersona" />
        <tabla-personas :personas="personas" @edit-persona="editaPersona" />
      </div>
    </div>
  </div>

  <hr />
  <prueba-vuex></prueba-vuex>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PropiedadesCalculadas from "./components/PropiedadesCalculadas.vue";
import TemplateSyntax from "./components/TemplateSyntax.vue";
import TablaPersonas from "./components/TablaPersonas.vue";
import FormularioPersona from "./components/FormularioPersona.vue";
import PruebaVuex from './components/vuex/PruebaVuex.vue';

export default {
  name: "App",
  components: {
    HelloWorld,
    TemplateSyntax,
    PropiedadesCalculadas,
    TablaPersonas,
    FormularioPersona,
    PruebaVuex,
  },
  data() {
    return {
      personas: [
        // {
        //   id: 1,
        //   nombre: "Jon",
        //   apellido: "Nieve",
        //   email: "jon@email.com",
        //   pasatiempos: [
        //     {
        //       nombre: "Codear1",
        //       tipo: "Informatica1",
        //       lugar: "Oficina1"
        //     },
        //     {
        //       nombre: "Codear1",
        //       tipo: "Informatica1",
        //       lugar: "Oficina1"
        //     }
        //   ]
        // },
        // {
        //   id: 2,
        //   nombre: "Tyrion",
        //   apellido: "Lannister",
        //   email: "tyrion@email.com",
        //   pasatiempos: [
        //     {
        //       nombre: "Codear25",
        //       tipo: "Informatica2",
        //       lugar: "Oficina2"
        //     }
        //   ]
        // },
        // {
        //   id: 3,
        //   nombre: "Daenerys",
        //   apellido: "Targaryen",
        //   email: "daenerys@email.com",
        //   pasatiempos: [
        //     {
        //       nombre: "Codear3",
        //       tipo: "Informatica3",
        //       lugar: "Oficina3"
        //     }
        //   ]
        // },
      ],
      persona: {
        nombre: "Armando",
        apellido: "Morales",
        email: "amorales@gmail.com",
        pasatiempos: [
          {
            nombre: "p1aaaa",
            tipo: "p1",
            lugar: "p1"
          }
        ]
      }
    };
  },
  methods: {
    agregarPersona(persona) {
      let id = 0;

      if (this.personas.length > 0) {
        id = this.personas[this.personas.length - 1].id + 1;
      }

      this.personas = [...this.personas, { id, ...persona }];
      console.log(persona)
    },
    editaPersona(id) {
      this.persona.nombre = this.personas[id].nombre;
      this.persona.apellido = this.personas[id].apellido;
      this.persona.email = this.personas[id].email;
      this.persona.pasatiempos = this.personas[id].pasatiempos ;
      console.log(this.persona)
    }
  },
};
</script>

<style>
/* 
    aqui va los estilos de la app
    y no lleva atributo scoped
  */
</style>
