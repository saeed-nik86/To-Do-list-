<template>
  <!-- title -->
  <div class="d-flex justify-content-center my-3">
    <h1>Deleted</h1>
  </div>
  <!-- works -->
  <section>
    <div
      class="p-4"
      v-for="work in filteredWorks"
      :key="work.id"
      :id="work.id"
      :class="{ 'text-light': dark }"
    >
      <div
        class="form-check rounded-3 my-3 shadow-lg bg-danger"
        style="display: flex; justify-content: space-between"
      >
        <div>
            {{work.title}}
        </div>
        <div>
          <i
            class="bi bi-arrow-down-short me-3 text-seccess"
            :class="{ 'text-dark': work.Condition }"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse-' + work.id"
            style="font-size: 20px"
          ></i>
        </div>
      </div>
      <!-- caption -->
      <div class="collapse border p-2 text-info" :id="'collapse-' + work.id">
        <p>
          {{ work.Information }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import { Store } from "vuex";
@Options({})
export default class Works extends Vue {
  works: any[] = [];
  get dark(): boolean {
    return (this.$store as Store<any>).getters.dark as boolean;
  }

  get filteredWorks() {
    return this.works.filter((work) => !work.Trash);
  }

  async mounted() {
    try {
      const res = await axios.get("http://localhost:3000/works");
      this.works = res.data;
    } catch (error) {
      console.error("Error fetching works:", error);
    }
  }

}
</script>

<style scoped>
/* Add Project button */
.bg-dark {
  background-color: #343a40 !important; /* Dark background */
}

.text-light {
  color: #f8f9fa !important; /* Light text */
}

.bg-dark:hover {
  background-color: #23272b !important; /* Darker background on hover */
}

/* Header and section */
h1 {
  color: #007bff; /* Blue text */
}

.bg-light {
  background-color: #f8f9fa !important; /* Light grey background */
}

.shadow-lg {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important; /* Light shadow */
}
</style>
