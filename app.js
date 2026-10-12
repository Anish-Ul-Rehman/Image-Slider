const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const imgList = ["Image-1","Image-2","Image-3","Image-4","Image-5"];

let index = 0;

btns.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        console.log("Clicked");
        if(buttons.classList.contains("btn-left")){
            index--;
            if(index < 0){
                index = imgList.length - 1;
            }
            container.style.background = `url("Images/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index === imgList.length){
                index = 0;
            }
            container.style.background = `url("Images/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    });
});