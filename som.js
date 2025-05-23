let Callme=()=>{

    // document.write("hello world")// remove all the content of  html with the help of document
    //document.getElementbyId("")

    //document.getElementsByClassName("")
     let mytag=document.querySelector("#text")
     mytag.innerHTML="<p>Hello World</p>"
     let mytag2=document.querySelector("#content")
       mytag2.innerHTML="fall back to save zone"
       mytag.style.backgroundColor="red"
       mytag.style.color="white"
       

       

     //mytag.textcontent=""
    //document.write("hello")
}

let red=()=>{

let name =document.querySelector(".box")
name.style.backgroundColor="red"


}

let yellow=()=>
{
  let name=document.querySelector(".box")
  name.style.backgroundColor="yellow"


}
  
let green=()=>
{
  let name=document.querySelector(".box")
  name.style.backgroundColor="green"

  
}
let purple=()=>{

  let name=document.querySelector(".box")
//  name.style.color="purple"
  name.style.border="purple"
  name.style.backgroundColor="purple"
}


    

