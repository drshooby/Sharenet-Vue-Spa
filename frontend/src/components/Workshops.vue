<template>
  <div>
    <!-- Navigation Menu -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Sharenet SPA</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Spot Prices</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/workshops" class="nav-link" active-class="active">Workshops</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact-us" class="nav-link" active-class="active">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Workshops Content -->
    <div class="container mt-4">
      <h1>Workshops</h1>

      <!-- Filter for Available Workshops -->
      <div class="mb-3">
        <label>
          <input type="checkbox" v-model="showAvailableOnly" />
          Show Available Workshops Only
        </label>
      </div>

      <!-- Workshops Table -->
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Venue</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="workshop in filteredWorkshops" :key="workshop.id">
            <td>{{ workshop.venue }}</td>
            <td>{{ workshop.date }}</td>
            <td>{{ workshop.available ? "Available" : "Sold Out" }}</td>
            <td>
              <button
                class="btn btn-primary"
                :disabled="!workshop.available"
                @click="bookWorkshop(workshop)"
              >
                Book Now
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WorkshopsPage", 
  data() {
    return {
      workshops: [
        { id: 1, venue: "Cape Town", date: "2025-02-01", available: true },
        { id: 2, venue: "Durban", date: "2025-02-15", available: false },
        { id: 3, venue: "Johannesburg", date: "2025-03-01", available: true },
        { id: 4, venue: "Pretoria", date: "2025-03-15", available: false },
      ],
      showAvailableOnly: false,
    };
  },
  computed: {
    filteredWorkshops() {
      return this.showAvailableOnly
        ? this.workshops.filter((workshop) => workshop.available)
        : this.workshops;
    },
  },
  methods: {
    bookWorkshop(workshop) {
      axios
        .post(`${window.appConfig.apiUrl}/api/bookings`, {
          workshopId: workshop.id,
          date: workshop.date,
          venue: workshop.venue,
        })
        .then(() => {
          alert(`Workshop at ${workshop.venue} on ${workshop.date} has been booked.`);
        })
        .catch((error) => {
          console.error("Error booking workshop:", error);
          alert("Failed to book the workshop. Please try again.");
        });
    },
  },
};
</script>

<style>
/* Add custom styles here */
</style>
