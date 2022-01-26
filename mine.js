let indexValue = 1;
showImg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
    let i;
    let img = document.querySelectorAll('img');
    let sliders = document.querySelectorAll('.btm-sliders span');
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for(i = 0; i < img.length; i++){
        sliders[i].style.background = "rgba(255, 255, 255, 0.267)";
    }
    img[indexValue-1].style.display = "block";
    sliders[indexValue-1].style.background = "rgba(153, 205, 50, 0.63)";
}