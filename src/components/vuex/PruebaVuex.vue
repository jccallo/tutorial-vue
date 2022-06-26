<template>
	<div>{{ count }}</div>
	<ul>
		<li>{{ id }}</li>
		<li>{{ username }}</li>
	</ul>
	<button @click="aumentar" class="btn btn-primary">Aumentar</button>
	<button @click="decrement" class="btn btn-primary">Reducir</button><br>
	<button @click="setUserdata" class="btn btn-primary">
		Establecer datos del usuario
	</button>
</template>

<script>
export default {
	name: "PruebaVuex",
	computed: {
		count() {
			return this.$store.state.count;
		},
		id() {
			return this.$store.state.id;
		},
		username() {
			return this.$store.state.username;
		},
	},
	methods: {
		aumentar() {
			this.$store.commit("increment");
		},
    decrement() {
			this.$store.commit("decrement");
    },
		setUserdata() {
			this.$store.commit("setUsername", "Armando Morales");
			this.$store.commit("setId", 1);
		},
	},
};
</script>

<style></style>
