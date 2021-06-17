<template>
  <div id="nav">
    <div class="navstyle">
      <router-link to="/">Home</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/random">Random</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-transform: uppercase;
  text-align: center;
  color: white;
  background-color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

.navstyle {
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
}
</style>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.header {
  margin-top: 5%;
}
* {
  background-color: #2c3e50;
}
</style>
