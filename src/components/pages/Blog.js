import React from 'react';

export default function Blog() {
  return (
    <div>
      <section class="work" id="work">
        <h1>Work</h1>
        <div class="projects">
          {/* Project One */}
            <a class="project" href="https://bmorrissey34.github.io/Movies-TV-Search/">
                <figure>
                    <img src='./image/MoviesTV Shows.png' alt="Team Project One"/>
                    <h3>Movies/TV Shows Search</h3>
                    <span>HTML/CSS/JavaScript</span>   
                </figure>
            </a>
            <a href='https://github.com/Bmorrissey34/Movies-TV-Search'><button>GitHub Repository</button></a>
          {/* Project Two */}
          <a class="project" href="https://lijing-code.github.io/03-JS-Password-Generator/">
                    <figure>
                        <img src="./asset/image/Password Generator.png" alt="Password Generator"/> 
                        <h3>Password Generator</h3>
                        <span>JavaScript</span>
                    </figure>
                </a>  
                <a href='https://github.com/lijing-code/03-JS-Password-Generator'><button>GitHub Repository</button></a>
          {/* Project Three */}
          <a class="project" href="https://lijing-code.github.io/04-Web-APIs-Code-Quiz/">
                    <figure>
                        <img src="./asset/image/Code Quiz.png" alt="Code Quiz"/>
                        <h3>Code Quiz</h3>
                        <span>Web APIs</span>
                    </figure>
                </a>  
                <a href='https://github.com/lijing-code/04-Web-APIs-Code-Quiz'><button>GitHub Repository</button></a> 
          {/* Project Four */}
          <a class="project"  href=" https://lijing-code.github.io/05-Third-Party-APIs-Work-Day-Scheduler/">
                    <figure>
                        <img src="./asset/image/Work Day.png" alt="Work Day Scheduler"/>
                        <h3>Work Day Scheduler</h3>
                        <span>Third Party APIs</span>
                    </figure>
                </a>
                <a href='https://github.com/lijing-code/05-Third-Party-APIs-Work-Day-Scheduler'><button>GitHub Repository</button></a>
          {/* Project Five */}
          <a class="project" href="https://lijing-code.github.io/06-Server-Side-APIs-Weather-Dashboard/">
                    <figure>
                        <img src="./asset/image/Weather Dashboard.png" alt="Weather Dashboard"/>
                        <h3>Weather Dashboard</h3>
                        <span>Server Side APIs</span>
                    </figure>
                </a>
                <a href='https://github.com/lijing-code/Server-Side-APIs-Weather-Dashboard'><button>GitHub Repository</button></a>
            </div>
          
      </section>
    </div>
  );
}
