


window.onscroll = function(){
    scrollRotate();
  };
  
  function scrollRotate(){
    let boxFooter1 = document.querySelector(".bartending_box:nth-child(1)");
    let boxFooter2 = document.querySelector(".bartending_box:nth-child(2)");
    let HotFoto = document.querySelector(".hot_drink_box:nth-child(1)");
    let HotFotor2 = document.querySelector(".hot_drink_box:nth-child(2)");
  
    let FotolearnJob = document.querySelector(".container_learn_a_job_box:nth-child(1)");
    let FotolearnJob2 = document.querySelector(".container_learn_a_job_box:nth-child(2)");
  
  
  
  
    boxFooter1.style.transform = "translateY(" + window.pageYOffset/14 + "px)";
    boxFooter2.style.transform = "translateY(-" + window.pageYOffset/14 + "px)";
    HotFoto.style.transform = "translateY(-" + window.pageYOffset/14 + "px)";
    HotFotor2.style.transform = "translateY(" + window.pageYOffset/14 + "px)";
    
    FotolearnJob.style.transform = "translateY(" + window.pageYOffset/14 + "px)";
    FotolearnJob2.style.transform = "translateY(-" + window.pageYOffset/14 + "px)";
  
  }
  




















