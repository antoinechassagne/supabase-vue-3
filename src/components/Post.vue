<template>
  <article>
    <h2>{{ post.title }}</h2>
    <template v-for="(element, index) in post.content" :key="index">
      <component :is="getTag(element.type)">
        {{ element.content }}
      </component>
    </template>
  </article>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});

function getTag(contentType) {
  switch (contentType) {
    case "heading":
      return "h3";
    case "paragraph":
      return "p";
  }
}
</script>
