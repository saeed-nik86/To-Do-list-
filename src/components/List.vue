<template>
  <!-- title -->
  <div class="text-center my-3 content">
    <h2>To Do List</h2>
  </div>
  <!-- list -->
  <div
    class="p-3 d-flex h-50 content"
    style="flex-direction: column; justify-content: space-around"
  >
    <div @click="changeState('all')">
      <i
        class="bi bi-calendar-check text-success me-2"
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
      <i class="bi bi-check-circle text-info me-2" style="font-size: 30px"></i>
      <span class="fw-bold">Done</span>
    </div>
    <div @click="changeState('undone')">
      <i class="bi bi-x-circle text-danger me-2" style="font-size: 30px"></i>
      <span class="fw-bold">Undone</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Store } from "vuex";
@Options({})
export default class Works extends Vue{
    changeState(state: String): void {
    const store = this.$store as Store<any>;
    store.commit("changeState", state);
    console.log(state)
  }
}
</script>

<style scoped>
.content {
  position: relative;
  z-index: 1;
}
</style>