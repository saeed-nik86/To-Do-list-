<template>
  <div class="container-md w-100 h-100">
    <!-- row -->
    <div class="row h-100 w-100 g-0">
      <!-- menu -->
      <div class="d-none d-md-block col-md-2 h-100 blurred-col">
        <List />
      </div>
      <!-- main -->
      <div class="col-12 col-md-10 bg-light h-100" :class="{ 'bg-dark': dark }">
        <Nav />
        <Works v-if="componentAll" :class="{ 'bg-dark': darkMode }" />
        <Undone v-if="componentUndone" :class="{ 'bg-dark': darkMode }" />
        <Done v-if="componentDone" :class="{ 'bg-dark': darkMode }" />
        <Trash v-if="componenttrash"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import List from "../components/List.vue";
import Nav from "../components/Nav.vue";
import Works from "../components/Works.vue";
import Undone from "../components/Undone.vue";
import Done from "../components/Done.vue";
import Trash from "../components/delete/Trash.vue";
import { Store } from "vuex";

type Code = "done" | "undone" | "all" | "trash";

@Options({
  components: {
    List,
    Nav,
    Works,
    Undone,
    Done,
    Trash,
  },
})
export default class Container extends Vue {
  get state(): Code {
    return (this.$store as Store<any>).getters.modeState;
  }
  // Computed properties to determine which component to show
  get componentAll(): boolean {
    return this.state === "all";
  }

  get componentDone(): boolean {
    return this.state === "done";
  }

  get componentUndone(): boolean {
    return this.state === "undone";
  }

  get componenttrash(): boolean {
    return this.state === "trash";
  }

  get dark(): boolean {
    return (this.$store as Store<any>).getters.dark as boolean;
  }

  get darkMode(): boolean {
    // Assuming darkMode is the same as dark in your logic
    return this.dark;
  }

  mounted() {
    // Any additional logic you need to run on mount
  }
}
</script>

<style scoped>
/* Blurred column */
.blurred-col {
  position: relative;
  background: rgba(255, 255, 255, 0.7); /* Semi-transparent white */
  backdrop-filter: blur(10px); /* Blurry effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

.blurred-col .content {
  position: relative;
  z-index: 1;
}
</style>
