const request = require("supertest");
const app = require("../server");

jest.mock("mysql2", () => ({
  createPool: jest.fn().mockReturnValue({
    query: jest.fn().mockImplementation((query, values, callback) => {
      if (query.includes("INSERT INTO bookings")) {
        callback(null, { affectedRows: 1 }); // success simulation
      } else {
        callback(new Error("Database error"), null); // failure simulation
      }
    }),
    getConnection: jest.fn().mockImplementation((callback) => {
      callback(null, { release: jest.fn() });
    })
  })
}));

// Test the POST /api/bookings endpoint
describe("POST /api/bookings", () => {
    const workshop = {
      workshopId: 1,
      date: "2025-02-01",
      venue: "Cape Town",
    };
  
    let response;
  
    // Run this before each test
    beforeEach(async () => {
      response = await request(app).post("/api/bookings").send(workshop);
    });
  
    // Test 1: Check the response status and body
    it("should return a 200 status and success message", () => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Booking saved successfully",
      });
    });
  
    // Test 2: Check the MySQL query
    it("should call the database with the correct query and values", () => {
      const pool = require("mysql2").createPool();
      expect(pool.query).toHaveBeenCalledWith(
        "INSERT INTO bookings (workshop_id, date, venue) VALUES (?, ?, ?)",
        [workshop.workshopId, workshop.date, workshop.venue],
        expect.any(Function)
      );
    });
  });