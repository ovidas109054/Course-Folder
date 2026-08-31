//Provlem 1

function getBatteryStatus(percentage: number): string {
    if (percentage <= 20) {
        return "Low";
    } else if (percentage <= 50) {
        return "Medium";
    } else if (percentage <= 80) {
        return "High";
    } else {
        return "Full";
    }
}

//Provlem 2

interface Table{
    name: string;
    guests: number;
    time: string;
}
function formatBookingConfirmation(booking: Table): string {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}

//Problem 3

function calculateWeeklyTotal(expenses: number[]): number {
    return expenses.reduce((sums, expenses)=>sums+expenses,0)
}

//Problem 4

type Light = "red"|"yellow"|"green";
function getTrafficAction(light: Light): string {
    if(light==="red"){
        return "Stop";
    }else if(light === "yellow"){
        return "Slow Down"
    }else{
        return "Go"
    }
}

//Problem 5

interface getSummary{
    total:number;
    average: number;
}

function getQuizSummary(scores: number[]): getSummary {
    const total = scores.reduce((sums,scores) =>sums+scores,0);

    let average = 0;

    if(scores.length >0){
        average = total/scores.length;
    }
    return{
        total:total,
        average:average
    };
}
