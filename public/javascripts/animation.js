var a=0;
function myFunction(){

  var open = document.getElementById('menu'),maxH = "660px";
    var line_1 = document.querySelector('#icon span:nth-child(1)')
    var line_2 = document.querySelector('#icon span:nth-child(2)')
    var line_3 = document.querySelector('#icon span:nth-child(3)')


  if(open.style.height == maxH){
    open.style.height = "0%";

    line_1.style.transform = "rotate(0deg)";
        line_2.style.transform = "rotate(0deg)";
        line_2.style.opacity = "1";
    line_3.style.transform = "rotate(0deg)";
    open.style.paddingTop = "0px";
  }else{
    open.style.height = maxH;

    line_1.style.transform = "rotate(45deg)translateY(11px)";
        line_2.style.transform = "rotate(45deg)";
        line_2.style.opacity = "0";
    line_3.style.transform = "rotate(-45deg)translateY(-11px)";
    open.style.paddingTop = "80px";
  }
}

// if you add some links at menu you must  modify this "open.style.paddingTop = "10px";"
//--------------end navigation bar




 














 
//--------translate from a link to an other------------
window.onload = () => {
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('.slider');

  setTimeout(() => {
    transition_el.classList.remove('is_active');
  }, 300); 

  for(let i = 0; i < anchors.length; i++){
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target.href;
  
    console.log(target);
    
    transition_el.classList.add('is_active');
   
    setTimeout(() =>{
    window.location.href = target;
    }, 300)

    });
  }
}


//--------------apear fx-----------------------------


function apear(){
 
  const elem = document.querySelectorAll('.reveal');

  for( var i = 0; i < elem.length; i++){

      const point = 80;
      const fullH = window.innerHeight;
      const topEl = elem[i].getBoundingClientRect().top;

      if(point <  fullH - topEl){
        elem[i].classList.add('active');
      }else{
          elem[i].classList.remove('active');
      }
  }
}
window.addEventListener('scroll',apear);



//_______________________________________

/**/





/*-------------fx footer animation 2 -----------

window.onscroll = function(){
  scrollRotate();
};

function scrollRotate(){
  let boxFooter1 = document.getElementById("twist1");
  let boxFooter2 = document.getElementById("twist2");
  let boxFooter3 = document.getElementById("twist3");

  boxFooter1.style.transform = "rotateX(" + window.pageYOffset/1 + "deg)";
  boxFooter2.style.transform = "rotateX(" + window.pageYOffset/1 + "deg)";
  boxFooter3.style.transform = "rotateX(" + window.pageYOffset/1 + "deg)";
}

-----*/





