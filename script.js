document.getElementById("bmrForm").addEventListener("submit", calcBMR);
let weightKG = document.getElementById('weight').value;
let heightCM = document.getElementById('height').value;
let age = document.getElementById('age').value;
let gender = document.getElementById('gender').value;
let BMR;
    
    function calcBMR(gender, weightKG, heightCM, age) {
    
        // Calculate BMR
        if (gender == 'male') {
            let BMR = 10 * weightKG + 6.25 * heightCM - 5 * age + 5;
        } else {
            let BMR = 10 * weightKG + 6.25 * heightCM - 5 * age - 161;
        }
    
    console.log(BMR);
    document.getElementById("output").textContent = "Your BMR is " + BMR;
    event.preventDefault();
    return;
}
