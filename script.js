function fun() {
    var n1 = document.getElementById("height").value.trim();
    var n2 = document.getElementById("weight").value.trim();

   
    if (!/^\d*\.?\d+$/.test(n1) || !/^\d*\.?\d+$/.test(n2)) {
        document.getElementById("result").innerHTML = "Please enter a valid format";
        return;
    }

    var height = parseFloat(n1);
    var weight = parseFloat(n2);
    var bmi = weight / (height * height);

    if (bmi <= 18.5) {
        document.getElementById("result").innerHTML = "Underweight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
        document.getElementById("result").innerHTML = "Normal Weight";
    } else if (bmi > 24.9 && bmi <= 29.9) {
        document.getElementById("result").innerHTML = "Overweight";
    } else {
        document.getElementById("result").innerHTML = "Obese";
    }
}

