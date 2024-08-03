<template>
  <div class=" pt-5" style="width: 100%; height: 100vh">
    <Form/>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Form from "../components/add/Form.vue"
@Options({
    components: {
        Form
    }
})
export default class Works extends Vue{

}
</script>

<style scoped>
</style>