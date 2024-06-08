function rollTheDice(){
    const myinput=document.getElementById("myinput").value;
    const myresult=document.getElementById("myresult");
    const myimages=document.getElementById("myimages");
  
    // const mybutton=document.getElementById("mybutton")
    let i=0;
    let result=[];
    let images=[];

    for( i=0; i<myinput;i++){
    myoutput=Math.floor(Math.random()*6 )+ 1;
    // console.log(myoutput)
    result.push(myoutput)
    console.log(result)
    images.push(`<img src="${myoutput}.png">`)
    
    }
    myresult.textContent= `Dice:${result.join(",")}` 
    myimages.innerHTML= `${images.join("")}` 

}