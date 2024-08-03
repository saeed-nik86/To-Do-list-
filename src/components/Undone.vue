<template>
  <!-- title -->
  <div class="d-flex justify-content-center my-3">
    <h1>Undone</h1>
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
        class="form-check rounded-3 my-3 shadow-lg bg-warning"
        style="display: flex; justify-content: space-between"
      >
        <div>
          <input
            class="form-check-input m-2"
            type="checkbox"
            :id="'checkbox-' + work.id"
          />
          <label class="form-check-label p-2" :for="'checkbox-' + work.id">
            {{ work.title }}
          </label>
        </div>
        <div>
          <i
            class="bi bi-x-circle text-danger me-3"
            style="font-size: 20px"
            @click="changeDone(work.id)"
          ></i>
          <i
            class="bi bi-arrow-down-short me-3 text-seccess"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse-' + work.id"
            style="font-size: 20px"
          ></i>
          <i
            class="bi bi-trash text-danger me-2"
            data-bs-toggle="collapse"
            data-bs-target="#saedd"
            style="font-size: 20px"
            @click="updateWork(work.id)"
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
    return this.works.filter((work) => !work.Condition);
  }

  async mounted() {
    try {
      const res = await axios.get("http://localhost:3000/works");
      this.works = res.data;
    } catch (error) {
      console.error("Error fetching works:", error);
    }
  }

  async updateWork(id: string) {
    try {
      const response = await axios.patch(`http://localhost:3000/works/${id}`, {
        Trash: false,
      });
      console.log("Work updated:", response.data);

      // Remove the work from the works array
      this.works = this.works.filter((work) => work.id !== id);
    } catch (error) {
      console.error("Error updating work:", error);
    }
  }
  async changeDone(id: string){
    const response = await axios.patch(`http://localhost:3000/works/${id}`,{
      Condition: false
    })
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
/* Form-check and labels */
.form-check-input:checked ~ .form-check-label {
  color: #007bff; /* Blue text for checked items */
}

.form-check-input:focus {
  border-color: #007bff; /* Blue border for focus */
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25); /* Blue shadow */
}

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
