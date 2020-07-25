<template>
  <div class="home">
    <h1 data-cy="home-title">This is the Home page</h1>
    <p data-cy="home-loged">You are logged.</p>
    <p data-cy="home-logout-info">You can log-out by pressing this button below</p>
    <button class="secondarybtn" @click="_logOut" data-cy="log-out-button">Log Out</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    _logOut() {
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$primary-color-dark: #0e3669;
.home {
  color: $primary-color-dark;
}
.secondarybtn {
  background: #36a0f7;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  margin-top: 30px;
  margin: 20px 0;
  padding: 10px 10px;
  width: 30%;
}

a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}
</style>
