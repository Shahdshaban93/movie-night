let main_imge= document.getElementById("main_imge");
let image = document.querySelectorAll('.image')
for(let i=0;i<image.length;i++){
    image[i].onmouseover=()=>{
     main_imge.src=image[i].src;
}
}
