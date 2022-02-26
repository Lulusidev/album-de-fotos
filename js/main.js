var clicks=0;

function click_button_back()
{
   return clicks++;
}

function change_background(index){
    const backgrounds = ["assets/src/back_white.jpg",
    "assets/src/back_dogs0.jpg",
    "assets/src/back_rose.png",
    "assets/src/back_dogs1.jpg"];

    index = index%backgrounds.length;
    let background = backgrounds[index];

    document.body.style.backgroundImage = `url("${background}")`;

}