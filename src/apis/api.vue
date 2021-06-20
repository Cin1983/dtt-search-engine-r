<template>
  <div id="api">
    <div class="container">
      <div class="button-wrapper">
        <button class="btn" @click="searchUnsplash('Autumn')">Autumn</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
searchUnsplash(topic)
{
  this.images = [];
  axios
    .get(
      `https://api.unsplash.com/GET/photos/random?query=${topic}&per_page=10`,

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
    });
}
</script>
