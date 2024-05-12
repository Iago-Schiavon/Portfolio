const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const slidesLength = slides.length;

let activeSlideIndex = 0;

const moveToSlide = (swap) => {
  if (sliderContainer.classList.contains('slider-locked')) return;

  activeSlideIndex = (activeSlideIndex + swap + slidesLength) % slidesLength;

  sliderContainer.classList.add('slider-locked');

  slides.forEach((slide, index) => {
    slide.classList.toggle('scrolling_active', index === activeSlideIndex);
  });
}

const onTransitionEnd = () => {
  sliderContainer.classList.remove('slider-locked');
}

const onScroll = (event) => {
  event.preventDefault();
  const swap = Math.sign(event.deltaY);
  moveToSlide(swap);
}

document.addEventListener('wheel', onScroll);
sliderContainer.addEventListener('transitionend', onTransitionEnd);

/*
//Identificar quando o usuario utilizando o scroll
// Calcular a distancia entre o topo da pafina e scroll
//Calcular  a distancia entre o topo da pagina e o elemento que deseja animar
// Adicionar uma classe com css animation ou transition ao elemento animado
debounce=function(func,wait,immediate){
  var timeout;
  return function(){
      var context=this,args=arguments;
      var later=function(){
          timeout=null;
          if(!immediate)func.apply(context,args);
      };
      var callNow=immediate && !timeout;
      clearTimeout(timeout);
      timeout=setTimeout(later,wait);
      if(callNow) func.apply(context,args);
  };
};

(function(){
var target=document.getElementsByClassName('anime'),
  animationClass='anime-start',
  offset=window.innerHeight*3/4;
  
function animeScroll(){
  for(var i=0;i<target.length;i++)
  {
      var itenTop=target[i].offsetTop;
      target[i].classList.remove(animationClass);
      if(window.pageYOffset>=itenTop-offset)
      {
          target[i].classList.add(animationClass);
      }
  }
}
animeScroll();
$(document).scroll(debounce(function(){
  animeScroll();
  console.log("teste");
},165));
}());
*/