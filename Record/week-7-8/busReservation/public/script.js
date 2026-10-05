// Display available buses
function loadBuses() {

    fetch("/buses")
        .then(response => response.json())
        .then(buses => {

            let output = "";

            buses.forEach(bus => {

                output += `
                    <div class="bus">
                        <b>Bus Number:</b> ${bus.busNo}<br>
                        <b>From:</b> ${bus.source}<br>
                        <b>To:</b> ${bus.destination}<br>
                        <b>Available Seats:</b> ${bus.seats}
                    </div>
                `;
            });

            document.getElementById("busList").innerHTML = output;
        });
}


// Book ticket
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const busNo = document.getElementById("busNo").value;
    const seatNo = document.getElementById("seatNo").value;

    fetch("/book", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            busNo: busNo,
            seatNo: seatNo
        })

    })

    .then(response => response.json())

    .then(data => {

        document.getElementById("result").innerHTML = `
            <h3>${data.message}</h3>
            <p><b>Passenger:</b> ${data.passenger}</p>
            <p><b>Bus:</b> ${data.bus}</p>
            <p><b>Seat:</b> ${data.seat}</p>
        `;

    });

});