function generateEmail() {
    let name = prompt("What is your name?");
    let date = prompt("Enter your appointment date (e.g., March 17, 2025):");
    let time = prompt("Enter your appointment time (e.g., 3:00 PM):");

    if (name && date && time) {
        let appointment = {
            customerName: name,
            appointmentDate: date,
            appointmentTime: time
        }

        let emailMessage = `
        Hello ${appointment.customerName}, <br><br>
        This is a reminder for your appointment on <b>${appointment.appointmentDate}</b> at <b>${appointment.appointmentTime}</b>. <br>
        Please arrive 10 minutes early. Let us know if you need to reschedule.<br><br>
        Best regards, <br>Appointment Team
        `;

        document.getElementById("description").innerHTML = emailMessage;
        document.getElementById("main-heading").style.color = "blue";
    }


}

function splitBill() {
    let totalBill = prompt("Enter the total bill amount:");
    let billAmount = parseFloat(totalBill);

    if (!isNaN(billAmount) && billAmount > 0) {
        let splitAmount = billAmount / 4;
        document.getElementById("bill-result").innerHTML = `Each person pays: $${splitAmount.toFixed(2)}`;
    }   else {
        document.getElementById("bill-result").innerHTML = "Please enter a valid number!";
    }
}
