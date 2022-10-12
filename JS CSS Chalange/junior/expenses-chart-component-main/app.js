const charMon = document.getElementById("char1");
const charTue = document.getElementById("char2");
const charWed = document.getElementById("char3");
const charThu = document.getElementById("char4");
const charFri = document.getElementById("char5");
const charSat = document.getElementById("char6");
const charSun = document.getElementById("char7");

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



charMon.addEventListener("mouseover", function handleMouseOver() {
    valueMon.style.visibility = "visible";
});

charMon.addEventListener("mouseout", function handleMouseOut() {
    valueMon.style.visibility = "hidden";
});

charTue.addEventListener("mouseover", function handleMouseOver() {
    valueTue.style.visibility = "visible";
});

charTue.addEventListener("mouseout", function handleMouseOut() {
    valueTue.style.visibility = "hidden";
});

charWed.addEventListener("mouseover", function handleMouseOver() {
    valueWed.style.visibility = "visible";
});

charWed.addEventListener("mouseout", function handleMouseOut() {
    valueWed.style.visibility = "hidden";
});

charThu.addEventListener("mouseover", function handleMouseOver() {
    valueThu.style.visibility = "visible";
});

charThu.addEventListener("mouseout", function handleMouseOut() {
    valueThu.style.visibility = "hidden";
});

charFri.addEventListener("mouseover", function handleMouseOver() {
    valueFri.style.visibility = "visible";
});

charFri.addEventListener("mouseout", function handleMouseOut() {
    valueFri.style.visibility = "hidden";
});

charSat.addEventListener("mouseover", function handleMouseOver() {
    valueSat.style.visibility = "visible";
});

charSat.addEventListener("mouseout", function handleMouseOut() {
    valueSat.style.visibility = "hidden";
});

charSun.addEventListener("mouseover", function handleMouseOver() {
    valueSun.style.visibility = "visible";
});

charSun.addEventListener("mouseout", function handleMouseOut() {
    valueSun.style.visibility = "hidden";
});