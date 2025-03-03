# Sharenet Vue SPA (now DevOps-ified, yeah that's a word!)

Sharenet Vue SPA is a responsive single-page application built with Vue.js. The project integrates a frontend, backend, and database to display spot prices, workshop details, and contact information. Users can sort data, filter available workshops, and book events. The backend is powered by Node.js, and MySQL is used for data storage.

---

## Checkout the Other Repos!
<a href="https://github.com/drshooby/Sharenet-Vue-Spa">Infrastructure<a>  
<a href="https://github.com/MuneerMiller/Sharenet-Vue-Spa">Original source by MuneerMiller<a>

## Features

### 1. **Spot Prices Page**
- Displays the latest 5 spot prices from the Sharenet API.
- Includes sortable columns: **FullName**, **Price**, **Move**, **Percentage Move**, and **Time**.
- Mobile responsive with Bootstrap integration.
- Data is updated on user action and passed as props to components.

### 2. **Contact Us Page**
- Shows Sharenet's contact details, including address and phone number.
- ~~Integrates Google Maps to display Sharenet's location.~~ (API key expired)
- Includes navigation links to other pages.

### 3. **Workshops Page**
- Displays a list of workshops with venues, dates, and availability status.
- Allows filtering to show only available workshops.
- Enables booking for available workshops with data saved to the database.
- Workshop details are dynamically managed in the frontend.

---

## Technologies Used

### **Frontend**
- **Vue.js**: Framework for building the SPA.
- **Bootstrap**: For responsive design and UI components.
- **Vue Router**: For page navigation.
- **Vue Google Maps**: To display Google Maps on the Contact Us page.

### **Backend**
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Framework for building REST APIs.
- **MySQL**: Database for storing workshop booking data.
- **Axios**: For API consumption and HTTP requests.

### **Database**
- **MySQL**: Relational database used to store bookings.

### **Pipeline**
- **AWS EC2, ECR, RDS, Route 53, GitHub Actions, Docker**: Automated nightly deployments.
---

## Getting Started

### Prerequisites
- **Node.js** (v16+ recommended)
- **MySQL** installed and running
- **npm** package manager

---

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/sharenet-vue-spa.git
   cd sharenet-vue-spa
   ```

2. **Docker Container**
   ```bash
   docker compose up
   ```

6. Open your browser and navigate to:
   - Frontend: `http://localhost:8080`
   - Backend: `http://localhost:5000`

---

## Usage

- **Spot Prices Page**:
  - View the latest spot prices, sortable by column.
  - Refresh data with a button click.

- **Contact Us Page**:
  - View Sharenet’s contact details ~~and location on Google Maps~~.

- **Workshops Page**:
  - Filter workshops by availability.
  - Book available workshops and store bookings in the database.

---

## Folder Structure

```
sharenet-vue-spa/
│
├── frontend/          # Vue.js frontend
│   ├── public/        # Static assets
│   ├── src/           # Source code
│       ├── components # Vue components
│       ├── router     # Vue Router configuration
│       └── App.vue    # Main Vue application file
│
├── backend/           # Node.js backend
│   ├── server.js      # Backend server code
│   └── package.json   # Backend dependencies
│
└── README.md          # Project documentation
```

---

## API Endpoints

### POST `/api/bookings`
- **Description**: Save a workshop booking to the database.
- **Request Body**:
  ```json
  {
      "workshopId": 1,
      "date": "2025-02-01",
      "venue": "Cape Town"
  }
  ```
- **Response**:
  ```json
  {
      "message": "Booking saved successfully"
  }
  ```

---

## Known Issues and Limitations
- Booking conflicts (e.g., duplicate entries) are not currently handled.

---

## Media

### Spot Prices Page
![Spot Prices Page](https://github.com/user-attachments/assets/0cd3b231-2ea2-4717-8ac2-6caffd98c291)


### Workshops Page
![Workshops Page](https://github.com/user-attachments/assets/c38d9df5-eafb-403d-a9fa-03c2257723e0)


### Contact Us Page
![Contact Us Page](https://github.com/user-attachments/assets/0602aedb-52b9-4949-bf56-97ad8da0e97e)
