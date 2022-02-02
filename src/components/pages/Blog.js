import React from 'react';

export default function Blog() {
  return (
    
      <section class="work" id="work">
        <h1>Work</h1>
        <div class="projects">
          {/* Project One */}
            <a class="project" id='project-one' href="https://bmorrissey34.github.io/Movies-TV-Search/">
                <figure>
                  <figure className="project-one-img"></figure>
                    <h3>Movies/TV Shows Search</h3>
                    <span>HTML/CSS/JavaScript</span>   
                </figure>
            </a>
            <a href='https://github.com/Bmorrissey34/Movies-TV-Search'><button>GitHub Repository</button></a>
          {/* Project Two */}
          <a class="project" href="https://lijing-code.github.io/03-JS-Password-Generator/">
                    <figure>
                    <figure className="project-two-img"></figure>
                        <h3>Password Generator</h3>
                        <span>JavaScript</span>
                    </figure>
                </a>  
                <a href='https://github.com/lijing-code/03-JS-Password-Generator'><button>GitHub Repository</button></a>
          {/* Project Three */}
          <a class="project" href="https://lijing-code.github.io/04-Web-APIs-Code-Quiz/">
                    <figure>
                    <figure className="project-three-img"></figure>
                        <h3>Code Quiz</h3>
                        <span>Web APIs</span>
                    </figure>
                </a>  
                <a href='https://github.com/lijing-code/04-Web-APIs-Code-Quiz'><button>GitHub Repository</button></a> 
          {/* Project Four */}
          <a class="project"  href=" https://lijing-code.github.io/05-Third-Party-APIs-Work-Day-Scheduler/">
                    <figure>
                    <figure className="project-four-img"></figure>
                        <h3>Work Day Scheduler</h3>
                        <span>Third Party APIs</span>
                    </figure>
                </a>
                <a href='https://github.com/lijing-code/05-Third-Party-APIs-Work-Day-Scheduler'><button>GitHub Repository</button></a>
          {/* Project Five */}
          <a class="project" href="https://lijing-code.github.io/06-Server-Side-APIs-Weather-Dashboard/">
                    <figure>
                    <figure className="project-five-img"></figure>
                        <h3>Weather Dashboard</h3>
                        <span>Server Side APIs</span>
                    </figure>
                </a>
                <a href='https://github.com/lijing-code/Server-Side-APIs-Weather-Dashboard'><button>GitHub Repository</button></a>
            </div>
          
      </section>
    
  );
}
