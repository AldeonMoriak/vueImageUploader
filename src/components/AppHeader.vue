<template>
  <div class="ui secondary pointing menu">
    <router-link class="active item" to="/">Image Updloader</router-link>
    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <a v-else class="item ui" @click="login">login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  methods: mapActions(["login", "logout"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
