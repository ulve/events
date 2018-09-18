import Vuex from "vuex";
import { StoreDB } from "@/services/fireinit.js";

const createStore = () => {
  return new Vuex.Store({
    state: {
      events: []
    },

    getters: {
      events: state => state.events
    },

    mutations: {
      SET_EVENT: (state, { event }) =>
        (state.events = [...state.events, event.data()])
    },

    actions: {
      getEvents: ({ commit }) => {
        let serverRef = StoreDB.collection("events");
        serverRef.onSnapshot(snap => {
          snap.forEach(event => commit("SET_EVENT", { event }));
        });
      }
    }
  });
};

export default createStore;
