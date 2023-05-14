function generateNavigation(){
  if(typeof window.jQuery === undefined || !window.jQuery){
    setTimeout(generateNavigation, 100);
    return;
  }

  let $ = window.jQuery;
  let navigation = `
  <!-- nav bar -->
    <nav class="sidenav">
        <ul class="justify-content-space-between">
            <li><a href="#about" class="allButtons">about</a></li>
            <li><a href="#projects" class="allButtons">projects</a></li>
            <li><a href="#contact" class="allButtons">contact</a></li>
            <li><a href="#resume" class="allButtons">resume</a></li>
        </ul>
    </nav>
  <!-- end nav bar -->`;
  if($('.sidenav').length == 0){
    $('header').append(navigation);
  }

  $('nav ul li a').click(function(e){
    e.preventDefault();
    var dest=0;
    if($(this.hash).offset().top > $(document).height()-$(window).height()){
         dest=$(document).height()-$(window).height();
    }else{
         dest=$(this.hash).offset().top;
    }
    //go to destination
    $('html,body').animate({scrollTop:dest}, 2500,'swing');
  });
}

function projectSlider(){
  let $ = window.jQuery;
  if(typeof window.jQuery === undefined || !window.jQuery){
    setTimeout(projectSlider, 100);
    return;
  }

  $('body').append(`<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>`);
  let parent = $('#projects-deployed .row');
  parent.addClass('slick-container');

  $('.slick-container').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    });
}

generateNavigation();
projectSlider();