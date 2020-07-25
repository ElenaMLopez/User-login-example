<template>
  <div class="login-container">
    <img alt="Karumi logo" src="../assets/logo.png" />
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  border-radius: 5px;
  border: 1.5px solid #cccccc;
  margin: 100px auto;
  padding: 100px 40px 20px;
  width: 280px;
}
</style>
