<template>
  <p v-if="state.error">Une erreur est survenue</p>
  <p v-else-if="state.loading">Chargement...</p>
  <Post v-else v-for="post in state.posts" :key="post.id" :post="post" />
</template>

<script async setup>
import { reactive, onMounted } from "vue";
import { fetchPosts } from "./services/api";
import Post from "./components/Post.vue";

const state = reactive({
  posts: [],
  loading: true,
  error: false,
});

onMounted(async () => {
  const response = await fetchPosts();
  state.error = response.error;
  state.posts = response.data;
  state.loading = false;
});
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}
</style>
