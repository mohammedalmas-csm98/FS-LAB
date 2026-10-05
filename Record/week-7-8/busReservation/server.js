const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Get available buses
app.get("/buses", (req, res) => {
    const buses = [
        {
            busNo: "BUS101",
            source: "Hyderabad",
            destination: "Bangalore",
            seats: 20
        },
        {
            busNo: "BUS102",
            source: "Hyderabad",
            destination: "Chennai",
            seats: 15
        },
        {
            busNo: "BUS103",
            source: "Hyderabad",
            destination: "Mumbai",
            seats: 25
        }
    ];

    res.json(buses);
});

// Book ticket
app.post("/book", (req, res) => {
    const { name, busNo, seatNo } = req.body;

    res.json({
        success: true,
        message: "Ticket booked successfully!",
        passenger: name,
        bus: busNo,
        seat: seatNo
    });
});

// Start server
app.listen(3000, () => {
    console.log("Bus Reservation Server started");
    console.log("Open http://localhost:3000");
});