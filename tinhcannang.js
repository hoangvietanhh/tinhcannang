let weight=parseFloat(prompt('Nhập cân nặng(Kg): '));
let height=parseFloat(prompt('Nhập chiều cao(Cm): '));

bmi= weight / ((height / 100) ^ 2);

if (bmi < 18)
    document.write("Underweight");
else if (bmi < 25.0)
    document.write("Normal");
else if (bmi < 30.0)
    document.write("Overweight");
else
    document.write("Obese");
