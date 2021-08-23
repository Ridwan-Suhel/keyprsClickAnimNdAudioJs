let len =  document.querySelectorAll(".myButton").length;

for(let i=0; i<len; i++){
    let button = document.querySelectorAll(".myButton")[i];

    button.addEventListener("click",function(){
        let txt = this.innerHTML;
        audioPlay(txt);
        playAnimation(txt);
    });
}


document.addEventListener("keypress", function(event){
    let press = event.key;
    audioPlay(press);
    playAnimation(press);
});



function audioPlay(txt){
    switch(txt){
        case "a":
            var audio = new Audio("audio/a.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("audio/b.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("audio/c.mp3");
            audio.play();
            break;
    }
}


function playAnimation(txt){
    let selectedButton = document.querySelector("."+txt);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    }, 1500);
};


































// for(let i=0; i<3; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         let text = this.innerHTML;
//         audioPlay(text);
//     });
// }

// function audioPlay(findText){
//     switch(findText){
//         case "A":
//             var audio = new Audio("audio/a.mp3");
//             audio.play();
//             break;

//         case "B":
//             var audio = new Audio("audio/b.mp3");
//             audio.play();
//             break;

//         case "C":
//             var audio = new Audio("audio/c.mp3");
//             audio.play();
//             break;
            
//     }
// }