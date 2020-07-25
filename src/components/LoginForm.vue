<template>
  <div>
    <form class="login-form" type="submit">
      <input
        id="userEmail"
        v-model="email"
        class="login-form__user-input"
        type="email"
        name="email"
        placeholder="User Email"
        data-cy="input-userEmail"
      />
      <input
        id="userPassword"
        v-model="password"
        class="login-form__user-input"
        type="password"
        name="password"
        placeholder="Password"
        data-cy="input-userPass"
      />
      <button v-on:click="_sendData" class="form-button primarybtn" data-cy="send-form">Login</button>
      <p v-if="loginError" class="error" data-cy="error-message">Please try again</p>
    </form>
  </div>
</template>

<script>
import login from "@/services/apicalls.js";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      loginError: false
    };
  },
  methods: {
    login,
    _sendData: async function(e) {
      e.preventDefault();
      const token = await login(this.email, this.password);
      if (token instanceof Error) {
        this.loginError = true;
      } else {
        localStorage.setItem("karumi_user_token", token);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped lang="scss">
$primary-color: #217af0;
$border-light: #cccccc;
$error-color: red;

.login-form {
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0;
  max-width: 500px;
  width: 100%;
  &__user-input {
    border-radius: 5px;
    border: 1px solid $border-light;
    margin: 10px 0;
    padding: 10px;
  }
  .form-button {
    border: none;
    color: white;
    font-weight: bold;
    margin-top: 30px;
    margin: 20px 0;
    padding: 10px 0;
    width: 30%;
  }
}
.primarybtn {
  background: $primary-color;
  border-radius: 5px;
}
.error {
  color: $error-color;
}
</style>
