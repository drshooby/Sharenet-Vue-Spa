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
  
      <!-- Page Header -->
      <header class="bg-primary text-white text-center py-4 mb-4">
        <h1>Spot Prices</h1>
        <p>View the latest spot prices across different categories.</p>
        <button class="btn btn-light" @click="$emit('refreshData')">Refresh Data</button>
      </header>
  
      <!-- Main Content -->
      <div class="container">
        <!-- Table -->
        <table class="table table-hover">
          <thead class="table-dark">
            <tr>
              <th @click="sortBy('fullName')">FullName</th>
              <th @click="sortBy('price')">Price</th>
              <th @click="sortBy('move')">Move</th>
              <th @click="sortBy('percentageMove')">Percentage Move</th>
              <th @click="sortBy('time')">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in sortedData" :key="item.code">
              <td>{{ item.fullName || "N/A" }}</td>
              <td>{{ item.price ? item.price.toFixed(2) : "0.00" }}</td>
              <td>{{ item.move || "N/A" }}</td>
              <td>{{ item.percentageMove ? item.percentageMove.toFixed(2) : "0.00" }}</td>
              <td>{{ item.time || "N/A" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      spotData: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        sortColumn: "fullName",
        sortOrder: "asc",
      };
    },
    computed: {
      sortedData() {
        return [...this.spotData].sort((a, b) => {
          const direction = this.sortOrder === "asc" ? 1 : -1;
          if (a[this.sortColumn] > b[this.sortColumn]) return direction;
          if (a[this.sortColumn] < b[this.sortColumn]) return -direction;
          return 0;
        });
      },
    },
    methods: {
      sortBy(column) {
        if (this.sortColumn === column) {
          this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
        } else {
          this.sortColumn = column;
          this.sortOrder = "asc";
        }
      },
    },
  };
  </script>
  
  <style>
  header {
    background: #007bff;
    color: #fff;
    border-radius: 5px;
  }
  
  .table-hover tbody tr:hover {
    background-color: rgba(0, 123, 255, 0.1);
  }
  
  .nav-link.active {
    font-weight: bold;
    text-decoration: underline;
  }
  </style>
  