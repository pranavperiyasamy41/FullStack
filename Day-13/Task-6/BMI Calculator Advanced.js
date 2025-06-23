function BMI(H, W) {
    let HT = H / 100.0;
    var bmi = W / (HT * HT);
    if (bmi < 18.5) {
        console.log("Under Weight");
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Normal Weight");
    }
    else {
        console.log("Over Weight");
    }
    return Math.round(bmi);
}

let msg = BMI(170, 60);
console.log(msg);