<template>
  <div id="app">
    <router-view :spotData="spotData" @refreshData="fetchSpotData" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      spotData: [], // Holds the spot prices data
    };
  },
  methods: {
    fetchSpotData() {
      axios
        .get("https://api.sharenet.co.za/api/v1/px2/spots")
        .then((response) => {
          if (response.data && Array.isArray(response.data.spots)) {
            this.spotData = response.data.spots.slice(0, 5); // Fetch top 5
          } else {
            console.error("Unexpected response format:", response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching spot data:", error);
        });
    },
  },
  mounted() {
    this.fetchSpotData(); // Fetch data when the app is mounted
  },
};
</script>

<style>
/* Add global styles here */
</style>
