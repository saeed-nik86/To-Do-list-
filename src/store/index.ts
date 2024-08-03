import { createStore, Store as VuexStore } from 'vuex';

interface State {
  darkMode: boolean;
  modeState: "all"  |  "done" | "undone" | "trash";
  search: string;
}

export default createStore<State>({
  state() {
    return {
      darkMode: false,
      modeState: "all",
      search: ""
    };
  },
  mutations: {
    changeDark(state) {
      state.darkMode = !state.darkMode
    },
    changeState(state, playload){
      state.modeState = playload
    },
    searching(state, playload){
      state.search = playload
    }
  },
  actions: {},
  getters: {
    dark(state: State): boolean {
      return state.darkMode;
    },
    modeState(state: State): string{
      return state.modeState
    },
    search(state: State){
      return state.search
    }
  }
});
