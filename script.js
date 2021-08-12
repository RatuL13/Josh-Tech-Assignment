let total_items=document.querySelectorAll(".carousel-item");
let frwd_btn=document.querySelector(".carousel-button-forward");
let bkwrd_btn=document.querySelector(".carousel-button-backward");

frwd_btn.addEventListener("click",function(e){
  
  let temp=total_items[1].innerHTML
  total_items[1].innerHTML=total_items[0].innerHTML;
  let temp2=total_items[2].innerHTML;
  total_items[2].innerHTML=temp;
  total_items[0].innerHTML=temp2;
  let selected=document.querySelector(".carousel-item");
  $(".selected").animate({
    height: '+=35px',
    width: '+=35px',
  });
  $(".selected").animate({
    height: '-=35px',
    width: '-=35px',
  });
});

bkwrd_btn.addEventListener("click",function(e){
  let temp=total_items[2].innerHTML
  total_items[2].innerHTML=total_items[0].innerHTML;
  let temp1=total_items[1].innerHTML;
  total_items[1].innerHTML=temp;
  total_items[0].innerHTML=temp1;
  $(".selected").animate({
    height: '+=35px',
    width: '+=35px',
  });
  $(".selected").animate({
    height: '-=35px',
    width: '-=35px',
  });
});


