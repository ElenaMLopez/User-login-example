<template>
  <div class="home">
    <img src="@/assets/logo.png" alt="Karumi logo" />
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome
  }
};
</script>
