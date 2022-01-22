function calcTDEE() {
    let gender = document.getElementById("gender").value;
    let weightKG = document.getElementById("weight").value;
    let heightCM = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let activity = document.getElementById("activity").value;
    let BMR;
    let TDEE;
    // Calculate BMR
    if (gender == 'male') {
        BMR = 66 + (13.7 * weightKG) + (5 * heightCM) - (6.8 * age);
    } else {
        BMR = 655 + (9.6 * weightKG) + (1.8 * heightCM) - (4.7 * age);
    }

    // Calculate Calories
    if (activity = '1') {
        TDEE = BMR * 1.2
    } if (activity = '2') {
        TDEE = BMR * 1.375
    } if (activity = '3') {
        TDEE = BMR * 1.55
    } if (activity = '4') {
        TDEE = BMR * 1.725
    } if (activity = '5') {
        TDEE = BMR * 1.9
    }

    console.log("Success!");
    document.getElementById("bmrOutput").textContent = "Your BMR is " + Math.round(BMR);
    document.getElementById("tdeeOutput").textContent = "Your TDEE is " + Math.round(TDEE);
    event.preventDefault();
    return;
}