const form = document.querySelector('form');
const result = document.querySelector('.result');
const bmiCategory = document.querySelector('.bmi-category');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseFloat(document.querySelector('#Height').value) / 100;
    const weight = parseFloat(document.querySelector('#Weight').value);
    
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "⚠️ Please enter a valid height";
        bmiCategory.innerHTML = "";
        return;
    }
    
    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "⚠️ Please enter a valid weight";
        bmiCategory.innerHTML = "";
        return;
    }
    
    const bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML = `Your BMI is <span style="color: cyan;">${bmi}</span>`;
    
    if (bmi < 18.5) {
        bmiCategory.innerHTML = "⚠️You are <span class='underweight'>Underweight</span>";
        bmiCategory.style.backgroundColor = "#ffcc00";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory.innerHTML = "✅ You have a <span class='healthy'>Normal weight</span>";
        bmiCategory.style.backgroundColor = "#66ff66";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory.innerHTML = "⚠️ You are <span class='overweight'>Overweight</span>";
        bmiCategory.style.backgroundColor = "#ff9966";
    } else {
        bmiCategory.innerHTML = "⚠️ You are <span class='obese'>Obese</span>";
        bmiCategory.style.backgroundColor = "#ff3333";
    }
    bmiCategory.style.color = "white";
    bmiCategory.style.padding = "10px";
    bmiCategory.style.borderRadius = "8px";
    bmiCategory.style.marginTop = "10px";
});
