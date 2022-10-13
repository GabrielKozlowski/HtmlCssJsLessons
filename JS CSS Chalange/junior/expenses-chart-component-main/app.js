const chartMon = document.getElementById("chart1");
const chartTue = document.getElementById("chart2");
const chartWed = document.getElementById("chart3");
const chartThu = document.getElementById("chart4");
const chartFri = document.getElementById("chart5");
const chartSat = document.getElementById("chart6");
const chartSun = document.getElementById("chart7");

const valueMon = document.getElementById("value1");
const valueTue = document.getElementById("value2");
const valueWed = document.getElementById("value3");
const valueThu = document.getElementById("value4");
const valueFri = document.getElementById("value5");
const valueSat = document.getElementById("value6");
const valueSun = document.getElementById("value7");


valueMon.style.visibility = "hidden";
valueTue.style.visibility = "hidden";
valueWed.style.visibility = "hidden";
valueThu.style.visibility = "hidden";
valueFri.style.visibility = "hidden";
valueSat.style.visibility = "hidden";
valueSun.style.visibility = "hidden";



chartMon.addEventListener("mouseover", function handleMouseOver() {
    valueMon.style.visibility = "visible";
});

chartMon.addEventListener("mouseout", function handleMouseOut() {
    valueMon.style.visibility = "hidden";
});

chartTue.addEventListener("mouseover", function handleMouseOver() {
    valueTue.style.visibility = "visible";
});

chartTue.addEventListener("mouseout", function handleMouseOut() {
    valueTue.style.visibility = "hidden";
});

chartWed.addEventListener("mouseover", function handleMouseOver() {
    valueWed.style.visibility = "visible";
});

chartWed.addEventListener("mouseout", function handleMouseOut() {
    valueWed.style.visibility = "hidden";
});

chartThu.addEventListener("mouseover", function handleMouseOver() {
    valueThu.style.visibility = "visible";
});

chartThu.addEventListener("mouseout", function handleMouseOut() {
    valueThu.style.visibility = "hidden";
});

chartFri.addEventListener("mouseover", function handleMouseOver() {
    valueFri.style.visibility = "visible";
});

chartFri.addEventListener("mouseout", function handleMouseOut() {
    valueFri.style.visibility = "hidden";
});

chartSat.addEventListener("mouseover", function handleMouseOver() {
    valueSat.style.visibility = "visible";
});

chartSat.addEventListener("mouseout", function handleMouseOut() {
    valueSat.style.visibility = "hidden";
});

chartSun.addEventListener("mouseover", function handleMouseOver() {
    valueSun.style.visibility = "visible";
});

chartSun.addEventListener("mouseout", function handleMouseOut() {
    valueSun.style.visibility = "hidden";
});