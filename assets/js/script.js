
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
            <li><a href="index.html" class="allButtons">home</a></li>
            <li><a href="about.html" class="allButtons">about</a></li>
            <li><a href="projects.html" class="allButtons">projects</a></li>
            <li><a href="contact.html" class="allButtons">contact</a></li>
            <li><a href="/assets/images/LaceyGriffith_2022.pdf" class="allButtons" target="_blank">resume</a></li>
        </ul>
    </nav>
  <!-- end nav bar -->`;
  $('header').append(navigation)
}

generateNavigation();