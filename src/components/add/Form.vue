<template>
  <form
    @submit.prevent="saveinfo"
    class="container-md rounded-4 pe-0 filter"
    style="height: 90vh"
  >
    <div class="row h-100 align-items-center g-0">
      <div class="col-9 ps-5">
        <div>
          <label for="basic-url" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            placeholder="write title"
            style="height: 4vh; width: 85%"
            v-model="title"
            required
          />
        </div>
        <div class="my-5">
          <label for="floatingTextarea" class="form-label">Text</label>
          <div class="form-floating" style="width: 85%">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style="height: 20vh"
              v-model="information"
              required
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
        </div>
        <div class="mb-5" style="width: 85%">
          <label for="select" class="form-label">Select the job status</label>
          <select id="select" class="form-select" v-model="condition" required>
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>
        <div style="width: 85%; text-align: center">
          <button type="submit" class="w-75 btn btn-outline-success">
            save
          </button>
        </div>
      </div>
      <div
        class="d-none d-md-block col-3 bg-warning h-100 rounded-end-4"
        style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <div class="img w-100 h-100 rounded-end-4"></div>
      </div>
    </div>
  </form>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
@Options({})
export default class Works extends Vue {
  title: String = "";
  information: string = "";
  condition: boolean | string = false;

  async saveinfo() {
    const response = await axios.post("http://localhost:3000/works", {
      title: this.title,
      Information: this.information,
      Condition: this.condition,
      Trash: true,
    });
    this.$router.push("/");
  }
}
</script>

<style>
.img {
  background-image: url("../../assets/pic.png");
  background-size: cover;
  background-position: center;
}
.filter {
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
</style>