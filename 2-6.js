function change(){
var images = document.getElementsByTagName("img");
var array1 = ["image2.jpg" , "cheapest-calling-cards.jpg" , "cheapest-calling-cards.jpg"];
    for(var i = 0; i < images.length; i++){
       images[i].attributes[0].value = array1[i];
    }
}