<template>
  <nav class="navbar" :class="{ 'bg-dark': darkMode }">
    <div class="container-fluid d-md-flex justify-content-md-end">
      <button
        class="navbar-toggler d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list"></i>
      </button>
      <!-- search -->
      <div class="navbar-brand" :class="{ 'dark-input': darkMode }">
        <form class="d-flex" role="search" @click.prevent="searching">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style="
              background: rgba(255, 255, 255, 0.7);
              backdrop-filter: blur(5px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              border-radius: 5px;
            "
            v-model="search"
          />
          <button class="btn btn-outline-success p-2">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div class="navbar-brand">
        <i class="bi bi-bell"></i>
      </div>
      <div class="form-check form-switch" @click="changeMode">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
      <div
        class="offcanvas offcanvas-start"
        style="height: 100vh"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">To Do List</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div
            class="p-3 d-flex h-50"
            style="flex-direction: column; justify-content: space-around"
          >
            <div>
              <i
                class="bi bi-calendar-check text-success me-2"
                @click="changeState('all')"
                style="font-size: 30px"
              ></i>
              <span class="fw-bold">Today</span>
            </div>
            <div @click="changeState('trash')">
              <i
                class="bi bi-trash3 text-secondary-emphasis me-2"
                style="font-size: 30px"
              ></i>
              <span class="fw-bold">Trash</span>
            </div>
            <div @click="changeState('done')">
              <i
                class="bi bi-check-circle text-info me-2"
                style="font-size: 30px"
              ></i>
              <span class="fw-bold">Done</span>
            </div>
            <div @click="changeState('undone')">
              <i
                class="bi bi-x-circle text-danger me-2"
                style="font-size: 30px"
              ></i>
              <span class="fw-bold">Undone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Store } from "vuex";
@Options({})
export default class Container extends Vue {
  darkMode: boolean = false;
  search: string = "";
  changeMode(): void {
    const store = this.$store as Store<any>;
    store.commit("changeDark");
  }
  searching(): void {
    const store = this.$store as Store<any>;
    store.commit("searching", this.search);
  }
  changeState(state: String): void {
    const store = this.$store as Store<any>;
    store.commit("changeState", state);
    console.log(state);
  }
}
</script>

<style scoped>
/* Navbar styling with blur */
.navbar {
  background: rgba(255, 255, 255, 0.7); /* Semi-transparent background */
  backdrop-filter: blur(8px); /* Blurry effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

.dark-input {
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
}
.navbar-toggler {
  border-color: #c2c2c2; /* Light grey border */
}

.navbar-toggler-icon {
  background-image: linear-gradient(
    45deg,
    #6c757d,
    #adb5bd
  ); /* Grey gradient */
}
</style>
