function BMI(w, h) {
    let ht = h / 100.0;
    var bmi = w / (ht * ht);
    return Math.round(bmi);
}
var weight = 60;
var height = 175;
console.log(BMI(weight, height));