var header = document.getElementById("header");
var element3 = document.createElement("div");
header.appendChild(element3);
var element1 = document.createElement("h1");
var element2 = document.createTextNode("TODO APP");
element1.appendChild(element2);
element3.appendChild(element1);

//var div4 = document.createElement("div");
//div4.setAttribute("id" , "div4");
//header.appendChild(div4);
var input1 = document.createElement("input");
input1.setAttribute("type" , "text");
input1.setAttribute("placeholder" , "Enter your work");
input1.setAttribute("id" , "second");
element3.appendChild(input1);
//div4.appendChild(input1);

var input2 = document.createElement("input");
input2.setAttribute("type" , "button");
input2.setAttribute("value" , "Add Work");
input2.setAttribute("onclick" , "click1()");
input2.setAttribute("id" , "btn");
// input2.setAttribute("class" , "btn btn-outline-success")
element3.appendChild(input2);




function click1() {
   var main = document.getElementById("second").value ;
   if(main === "") {
       alert("Please enter text");
   }
    var div2 = document.createElement("div");
    var ul = document.createElement("ul");
    var li =  document.createElement("li");
    li.setAttribute("id" , main);
    var createText2 = document.createTextNode(main);
    li.appendChild(createText2);
    ul.appendChild(li);
    div2.appendChild(ul);
    header.appendChild(div2);
    var btn2 = document.createElement("input");
    btn2.setAttribute("type" , "button");
    btn2.setAttribute("value" , "Delete");
    btn2.setAttribute("id" , "btn3");
    li.appendChild(btn2);

    var btn3 = document.createElement("input");
    btn3.setAttribute("type" , "button");
    btn3.setAttribute("value" , "Edit");
    btn3.setAttribute("id" , "btn3");
    li.appendChild(btn3);
    


    btn2.addEventListener("click", function () {
        btn2.parentNode.remove()
        })
        //edit function
        btn3.addEventListener('click', function () {
        var li = this.parentNode;
        console.log("li",li);
        var text = prompt("enter value",li.id)
        console.log("text",text);
        li.innerText = text
        li.appendChild(btn2)
        li.appendChild(btn3)
        
        })
        document.getElementById("second").value = "";
}
