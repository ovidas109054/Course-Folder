"use strict";
//Provlem 1
Object.defineProperty(exports, "__esModule", { value: true });
function getBatteryStatus(percentage) {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    }
    else if (percentage >= 51 && percentage <= 90) {
        return "High";
    }
    else if (percentage >= 91 && percentage <= 100) {
        return "Full";
    }
}
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
//Problem 3
function calculateWeeklyTotal(expenses) {
    return expenses.reduce((sums, expenses) => sums + expenses, 0);
}
function getTrafficAction(light) {
    if (light === "red") {
        return "Stop";
    }
    else if (light === "yellow") {
        return "Slow Down";
    }
    else {
        return "Go";
    }
}
function getQuizSummary(scores) {
    const total = scores.reduce((sums, scores) => sums + scores, 0);
    let average = 0;
    if (scores.length > 0) {
        average = total / scores.length;
    }
    return {
        total: total,
        average: average
    };
}
//# sourceMappingURL=Psolve.js.map