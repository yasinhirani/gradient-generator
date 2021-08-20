let gradient = document.getElementById("gradient");
let to_left = document.getElementById("radio1");
let to_right = document.getElementById("radio2");
let to_top = document.getElementById("radio3");
let to_bottom = document.getElementById("radio4");
let getSelectedRadio = "";
const getColor = () => {
    let color_1 = document.getElementById("color1").value;
    let color_2 = document.getElementById("color2").value;
    let colorCode = document.getElementById("code");
    if (to_left.checked) {
        getSelectedRadio = "to left";
    }
    if (to_right.checked) {
        getSelectedRadio = "to right";
    }
    if (to_top.checked) {
        getSelectedRadio = "to top";
    }
    if (to_bottom.checked) {
        getSelectedRadio = "to bottom";
    }
    // console.log(color_1);
    // console.log(color_2);
    gradient.style.background = `linear-gradient(${getSelectedRadio}, ${color_1} , ${color_2})`;
    colorCode.innerHTML = `Code: background: linear-gradient(${getSelectedRadio}, ${color_1} , ${color_2})`;
}
const getColorByText = () => {
    let color_text_1 = document.getElementById("color-text1").value;
    let color_text_2 = document.getElementById("color-text2").value;
    let colorCode = document.getElementById("code");
    if (color_text_1=="") {
        alert("Enter all the colors");
    }
    else if (color_text_2=="") {
        alert("Enter all the colors");
    }
    else{
    if (to_left.checked) {
        getSelectedRadio = "to left";
    }
    if (to_right.checked) {
        getSelectedRadio = "to right";
    }
    if (to_top.checked) {
        getSelectedRadio = "to top";
    }
    if (to_bottom.checked) {
        getSelectedRadio = "to bottom";
    }
    // console.log(color_text_1);
    // console.log(color_text_2);
    gradient.style.background = `linear-gradient(${getSelectedRadio}, ${color_text_1} , ${color_text_2})`;
    colorCode.innerHTML = `Code: background: linear-gradient(${getSelectedRadio}, ${color_text_1} , ${color_text_2})`;
}
}
window.onload = getColor();