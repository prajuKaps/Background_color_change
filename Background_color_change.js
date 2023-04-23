const colors=['red','green','blue','yellow','pink','purple','black','gray', 'lightblue'];
let color_index = 0;
function changeColor(){
    // Using Math.random selecting random color form colors array
    // let color_name = parseInt(Math.random()*colors.length);
    // document.body.style.background = colors[color_name];


    //code to reset backgrround color to default and change color wrt the array index
    if(color_index==colors.length){
        document.body.style.background="white";
        color_index = 0;
        return
    }
    document.body.style.background = colors[color_index]
    color_index = color_index + 1;

}