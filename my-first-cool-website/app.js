const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title= document.querySelector('.title');
const ape= document.querySelector('.ape');
let info= document.querySelector('.info');
const indexnavigation= document.querySelector('.index-navigation');

//moving animation event
container.addEventListener("mousemove",(e)=>{
    let xes=(window.innerWidth/2-e.pageX)/25;
    let yes=(window.innerHeight/2-e.pageY)/25;
    card.style.transform=`rotateY(${xes}deg) rotateX(${yes}deg)`;
});

//in animation
container.addEventListener("mouseenter", (e)=>{
    card.style.transition="none";

    //popout
    title.style.transform = "translateZ(150px)";
  ape.style.transform = "translateZ(200px)";
  info.style.transform = "translateZ(125px)";
  indexnavigation.style.transform = "translateZ(100px)";
});
//out animation
container.addEventListener("mouseleave",(e)=>{
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
  ape.style.transform = "translateZ(0px) ";
  info.style.transform = "translateZ(0px)";
  indexnavigation.style.transform = "translateZ(0px)";
});

