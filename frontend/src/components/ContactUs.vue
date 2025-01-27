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
  
      <!-- Page Content -->
      <div class="container mt-4">
        <h1>Contact Us</h1>
  
        <!-- Breadcrumbs -->
        <nav aria-label="breadcrumb" class="mt-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
        </nav>
  
        <!-- Contact Information -->
        <div class="mt-4">
          <p><strong>Address:</strong> 123 Sharenet Street, Johannesburg</p>
          <p><strong>Phone:</strong> +27 11 123 4567</p>
          <p><strong>Email:</strong> info@sharenet.co.za</p>
        </div>
  
        <!-- Google Map -->
        <div class="mt-4">
          <h3>Our Location</h3>
          <GMapMap
            :center="{ lat: -26.2041, lng: 28.0473 }"
            :zoom="15"
            style="width: 100%; height: 400px;"
          >
            <GMapMarker :position="{ lat: -26.2041, lng: 28.0473 }" />
          </GMapMap>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { GMapMap, GMapMarker } from "@fawmi/vue-google-maps";
  
  export default {
    components: {
      GMapMap,
      GMapMarker,
    },
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  