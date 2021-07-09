<script>
import axios from "axios";

export default {
  name: "api",
  methods: {
    searchUnsplash(topic) {
      if (!this.images) this.images = [];
      axios
        .get(
          `https://api.unsplash.com/photos/random?query=${topic}&per_page=10`,

          {
            headers: {
              Authorization:
                "Client-ID oozTUUGcoOmOleTWzWgrDTU04NmhO8a-pxF5TmPPNKw",
              "Accept-Version": "v1",
            },
          }
        )
        .then((response) => {
          this.images.push(response.data);
          console.log(this.images);
        });
    },
  },
};
</script>
