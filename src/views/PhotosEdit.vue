<template>
  <div class="photos-edit">
    <h1>Edit Photo</h1>
    <form v-on:submit.prevent="updatePhoto(photo)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="photo.name" />
      Width:
      <input type="text" v-model="photo.width" />
      Height:
      <input type="text" v-model="photo.height" />
      Url:
      <input type="text" v-model="photo.url" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      photo: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/photos/" + this.$route.params.id).then((response) => {
      console.log("photos show", response);
      this.photo = response.data;
    });
  },
  methods: {
    updatePhoto: function (photo) {
      var editPhotoParams = photo;
      axios
        .patch("/photos/" + photo.id, editPhotoParams)
        .then((response) => {
          console.log("photos update", response);
          this.$router.push("/photos");
        })
        .catch((error) => {
          console.log("photos update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
