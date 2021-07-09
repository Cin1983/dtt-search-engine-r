<template lang="html">
  <div class="header">
    <h1>Search Engine</h1>
    <div class="ui large icon input">
      <input type="text" v-model="search" placeholder="Search large..." />
      <button class="big ui button" @click="searchUnsplash">Search</button>

      <stack
        :column-min-width="300"
        :gutter-width="15"
        :gutter-height="15"
        monitor-images-loaded
      >
        <stack-item
          v-for="(image, i) in images"
          :key="i"
          style="transition: transform 300ms"
        >
          <img :src="image.urls.small" :alt="image.alt_description" />
        </stack-item>
      </stack>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Stack, StackItem } from "vue-stack-grid";

export default {
  name: "App",
  components: {
    Stack,
    StackItem,
  },
  data: () => ({
    images: [],
  }),
  methods: {
    searchUnsplash(topic) {
      this.images = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&per_page=20`,
          {
            headers: {
              Authorization:
                "Client-ID oozTUUGcoOmOleTWzWgrDTU04NmhO8a-pxF5TmPPNKw",
              "Accept-Version": "v1",
            },
          }
        )
        .then((response) => {
          this.images = response.data.results;
        })
        .catch(() => {
          this.images = [];
        });
    },
  },
};
</script>
<style>
.button-wrapper {
  margin: 0 auto;
}
.button {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}
</style>
