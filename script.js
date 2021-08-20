let gradient = document.getElementById("gradient");
let to_left = document.getElementById("radio1");
let to_right = document.getElementById("radio2");
let to_top = document.getElementById("radio3");
let to_bottom = document.getElementById("radio4");
let to_left_text = document.getElementById("radio-text1");
let to_right_text = document.getElementById("radio-text2");
let to_top_text = document.getElementById("radio-text3");
let to_bottom_text = document.getElementById("radio-text4");
let output_color=document.getElementById("output");
let getSelectedRadio = "to left";
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
    colorCode.innerHTML = `background: linear-gradient(${getSelectedRadio}, ${color_1} , ${color_2});`;
    output_color.style.background = `linear-gradient(${getSelectedRadio}, ${color_1} , ${color_2})`;
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
    if (to_left_text.checked) {
        getSelectedRadio = "to left";
    }
    if (to_right_text.checked) {
        getSelectedRadio = "to right";
    }
    if (to_top_text.checked) {
        getSelectedRadio = "to top";
    }
    if (to_bottom_text.checked) {
        getSelectedRadio = "to bottom";
    }
    // console.log(color_text_1);
    // console.log(color_text_2);
    gradient.style.background = `linear-gradient(${getSelectedRadio}, ${color_text_1} , ${color_text_2})`;
    colorCode.innerHTML = `background: linear-gradient(${getSelectedRadio}, ${color_text_1} , ${color_text_2});`;
    output_color.style.background = `linear-gradient(${getSelectedRadio}, ${color_text_1} , ${color_text_2})`;
}
}
window.onload = getColor();
// window.onload = alert("Developed by Yasin Hirani & Designed by Mitul Patel");

const copyEmail = () =>{
    const myCode = document.getElementById('code');
    const textArea = document.createElement('textarea');
    textArea.value = myCode.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert("Copied")
  }
