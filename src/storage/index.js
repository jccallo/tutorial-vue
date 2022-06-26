import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
	state() {
		return {
			count: 0,
			isAuthenticated: false,
			username: "dddd",
			id: "222",
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
        decrement(state) {
            state.count--;
        },
		setAuthenticated(state, value) {
			state.isAuthenticated = value;
		},
		setUsername(state, username) {
			state.username = username;
		},
        setId(state, id) {
			state.id = id;
		},
	},
});

export default store;
