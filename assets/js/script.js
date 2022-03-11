//nav bar toggling
$('.menu > a').on('click', function(){
  let sectionId = $(this).attr('id');

  $('section').addClass('display-none');
  $(`#${sectionId}-section`).removeClass('display-none');

  $('#menu-open').click();
})

//create projects
  const tech = [
      {
          language: 'HTML',
          id: 0
      },
      {
          language: 'CSS',
          id: 1
      },
      {
          language: 'BootStrap',
          id: 2
      },
      {
          language: 'React',
          id: 3
      },
      {
          language: 'JavaScript',
          id: 4
      },
      {
          language: 'jQuery',
          id: 5
      },
      {
          language: 'Handlebars.js',
          id: 6
      },
      {
          language: 'Foundations',
          id: 7
      },
      {
          language: 'APIs',
          id: 8
      },
      {
          language: 'IndexDB',
          id: 9
      },
      {
          language: 'Sequelize',
          id: 10
      },
      {
          language: 'Express.js',
          id: 11
      },
      {
          language: 'MongoDB',
          id: 12
      },
      {
          language: 'Heroku',
          id: 13
      },
      {
          language: 'Mongoose',
          id: 14
      },
      {
          language: 'MySQL2',
          id: 15
      },
      {
          language: 'GraphQL',
          id: 16
      },{
          language: 'Node.js',
          id: 17
      }
  ]

  const projects = [
      {
          name: 'Flower Shop',
          image: 'assets/images/flower_shop.png',
          description: 'Flower Shop was created to enhance the online shopping experience for users wanting to purchase and send flowers to friends or loved ones. We combined simplicity with effeciency and the result is a user friendly, information driven, e-commerce flower shop. Users can browse by occasion, find details on products, add and remove items from their cart quickly and checkout seamlessly.',
          githubLink: 'https://github.com/hbbc248/the-flower-store',
          deploymentLink: 'https://flower-shop-project-3.herokuapp.com/',
          techUsed: [tech[0], tech[1], tech[2], tech[3], tech[4], tech[11], tech[12], tech[13], tech[14], tech[16], tech[17]]
      },
      {
          name: 'Namaste Fit',
          image: 'assets/images/namaste_fit.png',
          description: 'This application allows yoga enthusiasts to learn more about yoga poses. Our motivation for developing Namaste Fit is to improve the experiences surrounding yoga, personal journeys and education. Created by a team of 4, it is our first full stack application. We implemented Handlebars.js with little experience and successfully connected our backend database with our frontend functionality.',
          githubLink: 'https://github.com/lacey-griffith/yoga',
          deploymentLink: 'https://yoga-finish.herokuapp.com/',
          techUsed: [tech[0], tech[1], tech[2], tech[4], tech[5], tech[6], tech[8], tech[11], tech[10], tech[15]]
      },
      {
          name: 'National Park Finder',
          image: 'assets/images/national_park_finder.png',
          description: 'National Park Finder was developed to assist travelers in planning a trip to a national park by giving the user information such as activies, location and current weather. I implemented Foundations, a framework never used before this project! It was challenging at first but dedicating time to the documentation and trial and error eventually led to success. Team members all worked together by communicating often, helping solve problems, and deploying the final project.',
          githubLink: 'https://github.com/glendonintendo/national-park-finder',
          deploymentLink: 'https://glendonintendo.github.io/national-park-finder/',
          techUsed: [tech[0], tech[1], tech[4], tech[5], tech[7], tech[8]]
      },
      {
          name: 'Code Quiz',
          image: 'assets/images/code-quiz.png',
          description: 'Code Quiz allows students learning to code to test their knowledge of various compnents of Javascript. During this project I was learning to dynamically create objects from user input and to store data to use later. I was also getting my first exposure to implementing the use of local storage.',
          githubLink: 'github link',
          deploymentLink: 'deployment link',
          techUsed: [tech[0], tech[1], tech[4]]
      },
      {
          name: 'Password Generator',
          image: 'assets/images/password_generator.png',
          description: 'This application was created to help users generate a secure, randomized password based off their preferences for criteria. The length of the password and including lowercase, uppercase, numeric or special characters is all decided by the user. This project was my introduction to Javascript and the usefullness of the language became clearer as I progressed and learned more about the capabilities.',
          githubLink: 'https://github.com/lacey-griffith/friendly-parakeet',
          deploymentLink: 'https://lacey-griffith.github.io/friendly-parakeet/',
          techUsed: [tech[0], tech[1], tech[4]]
      }, 
      {
          name: 'Budget Tracker',
          image: 'assets/images/budget_tracker.png',
          description: 'Budget Tracker is an application to allow users to track their deposits and withdrawls while being online or off. As a PWA, progressive web application, it can be installed onto your phone or desktop and accessed at anytime. This project helped me understand that a PWA can truly increase user experience and meet their expectations of always having access to their applications.',
          githubLink: 'https://github.com/lacey-griffith/budget-tracker',
          deploymentLink: 'https://still-gorge-83604.herokuapp.com/',
          techUsed: [tech[0], tech[1], tech[4], tech[9], tech[11], tech[12], tech[14], tech[13]]
      },
      {
          name: 'Tech Blog',
          image: 'assets/images/tech_blog.png',
          description: 'This application was developed for bloggers to have a place to talk all things tech. It is versatile in the way that it could really be used for any blogger to start writing and sharing content. This project taught me how to utilize password security, session-storage and user authorization for specific activities (creating new posts, making comments) involving the server and database.',
          githubLink: 'https://github.com/lacey-griffith/tech-blog',
          deploymentLink: 'https://protected-headland-08406.herokuapp.com/',
          techUsed: [tech[1], tech[2], tech[4], tech[6], tech[8], tech[10], tech[15], tech[11],tech[13]]
      }
  ]

  let plus = `<svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.937 0v3.938H0v1.125h3.937V9h1.125V5.063H9V3.938H5.062V0z" fill="#202020" fill-rule="nonzero"/>
</svg>`;

    let minus = `<svg width="9" height="1.25" viewBox="0 0 9 1.25" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 .5h14v1.777H0z" fill="#202020" fill-rule="evenodd"/>
</svg>`;

  projects.map(function(project){
    let projectCard = `
    <div class="col project">
                    <a href=${project.deploymentLink}><img class="project-img"
                            src='${project.image}' alt=${project.name}></a>
                    <div class="project-info-holder">
                        <ul class="accordion">
                            <li>
                            <a class="toggle" href="javascript:void(0);">
                            <h3 class="project-title">${project.name} <span> read more ${plus}</span></h3></a>
                                <ul class="inner">
                                    <li>${project.description}</li>
                                </ul>
                            </li>
                        </ul>
                        <div class="project-info"><a href="${project.githubLink}">Visit Repository</a></div>
                    </div>
                </div>`;
    $('#projects-deployed .row').append(projectCard);
  });

  $('.toggle').click(function(e) {
    if ($(this).next().hasClass('show')) {
        $(this).find('span').html(`read more ${plus}`);
        $(this).next().removeClass('show');
        $(this).next().slideUp('slow');
    } else {
        $(this).find('span').html(`read less ${minus}`);
        $(this).next().addClass('show');
        $(this).next().slideDown('slow');
    }
  }); 