///////////////////////////
//  About page
//////////////////////////

// Typewritter effect for about-me
document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typewriter-text');
  const textContent = textElement.innerHTML;
  textElement.innerHTML = '';
  let i = 0;

  function typeWriter() {
      if (i < textContent.length) {
          textElement.innerHTML += textContent.charAt(i);
          i++;
          setTimeout(typeWriter, 30);
      } else {
          textElement.style.borderRight = 'none'; // Remove the cursor after typing is done
      }
  }

  typeWriter();
});

// For the projects popups
function showPopup(rectangleId) {
    var descriptions = {

      'rect-KTH': `
      <div class="section white">
      <div class="center-text">
        <h3> <a href="https://www.kth.se/" target="_blank">KTH Royal Institute of Technology</a></h3>
        <p><strong>Ph.D. 2018-2023</strong></p>
        <p style="font-size: smaller; font-style: italic; text-align: center;">🚀 Rank 39/1376 Engineering & Technology university worldwide <a href="https://www.timeshighereducation.com/world-university-rankings/kth-royal-institute-technology" target="_blank">Link</a></p>
    </div>
     <p><br>Ph.D. at the Division of Decision and Control Systems, Department of Intelligent Systems, under supervision of  <a href="https://scholar.google.ca/citations?user=fDeSgLwAAAAJ&hl=en&oi=ao" target="_blank">Prof. Bo Wahlberg <i class="fas fa-graduation-cap"> </i> </a> and <a href="https://scholar.google.ca/citations?user=g5sya5cAAAAJ&hl=en&oi=ao" target="_blank">Prof. Alexandre Proutiere <i class="fas fa-graduation-cap"> </i></a>.</p> <p> &#127942; I was awarded the KTH Electrical Engineering Scholarship of Excellence E2DOC, given to exceptionally excellent female candidates from the Electrical Engineering school, and the NewLeads project.</p>
      </div>
      <div class="section black">
      <p>I worked on a variety of problems concerning decision-making in autonomous systems, including forward and inverse problems in adversarial, cooperative, and biological settings. Here you can find my <a href="https://www.diva-portal.org/smash/get/diva2:1808643/FULLTEXT01.pdf" target="_blank">Ph.D. thesis</a> and in the menu "Publications" other publications like conference papers, journal articles, talks and posters. </p> 
      <p>&#128218; Outcomes: 2 theses, 10 peer-reviewed articles </p> <p>&#127942; 1 best paper award</p>
      </div>
      <div class="section white">
      Teaching:
      <ul> <li> TA for Automatic Control (2019, 2020, 2021) </li>
      <li> TA for Reinforcement Learning (2022) </li>
      <li> Lab responsible (2021, 2022) </li>
      </ul> 
      Supervision:
      <ul> <li> Bachelor thesis supervision (2019, 2020) - Reinforcement learning for games. <a href="https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1342302&dswid=-4174" target="_blank">One thesis</a> got 5k+ downloads.  </li>
      <li> Master thesis supervision (2023) - Industrial collaboration with <a href="https://climeon.com/" target="_blank">Climeon</a>, on modeling a system for converting waste heat into clean energy </li>
      </ul> 
      </div>
      <div class="section blue">
      <p>75 credits in courses, including:</p> <ul> <li>Data-driven modeling, theoretical foundations of machine learning, advanced topics in brain science, sustainable scientist, the theory and methodology of science, introduction to scientific writing.  </li> </ul>  
      </div>
      <div class="section black">

       <div id="svg-container">
       <!-- Embed the base SVG file -->
       <object id="world-svg" type="image/svg+xml" data="assets/images/worldmap.svg" width="500" height="500"></object>
       <!-- Overlay SVG elements -->
       <svg width="500" height="500">
       <circle
         class="cls-2 marker-sweden expandable-circle"
         cx="240"
         cy="130"
         id="marker-sweden"
         style="fill:#ff00ff;stroke-width:1.29584"
         r="12" /><circle
         class="cls-2 marker-chile expandable-circle"
         cx="102.44287"
         cy="310.11047"
         id="marker-chile"
         style="fill:#ff9955;stroke-width:1.29584"
         r="12" /><circle
         class="cls-2 marker-france expandable-circle"
         cx="220.05988"
         cy="160.64767"
         id="marker-france"
         style="fill:#ff9955;stroke-width:1.29585"
         r="12" /><circle
         class="cls-2 marker-barcelona expandable-circle"
         cx="210.05988"
         cy="180.64767"
         id="marker-barcelona"
         style="fill:#ff9955;stroke-width:1.29585"
         r="12" /><circle
         class="cls-2 marker-padova expandable-circle"
         cx="240.05988"
         cy="175.64767"
         id="marker-padova"
         style="fill:#ff9955;stroke-width:1.29585"
         r="12" /><circle
         class="cls-2 marker-korea expandable-circle"
         cx="420.6863"
         cy="170.48544"
         id="marker-korea"
         style="fill:#ff9955;stroke-width:1.29584"
         r="12" /><circle
         class="cls-2 marker-singapore expandable-circle"
         cx="380.2028"
         cy="250.02322"
         id="marker-singapore"
         style="fill:#ff9955;stroke-width:1.29584"
         r="12" /><circle
         class="cls-2 marker-berkeley expandable-circle"
         cx="30.8703"
         cy="160.33038"
         id="marker-berkeley"
         style="fill:#ff2a2a;stroke-width:1.29584"
         r="12" /><circle
         class="cls-2 marker-miami expandable-circle"
         cx="90.7962"
         cy="190.78424"
         id="marker-miami"
         style="fill:#ff9955;stroke-width:1.29584"
         r="12" /><circle
         class="cls-2 marker-mexico expandable-circle"
         cx="70"
         cy="210"
         id="marker-mexico expandable-circle"
         style="fill:#ff9955;stroke-width:1.29584"
         r="12" />
         </svg>
     </div>
     <div class="sweden-txt1 hide1">
     <p>Ph.D. at KTH in Stockholm, Sweden</p>
      </div>
      <div class="chile-txt1 hide1">
        <p>Presented my paper at ICDL-Epirob, in Chile (Virtual)</p>
        <p>Received the best paper award!</p>
      </div>
      <div class="berkeley-txt1 hide1">
        <p>Research visitor at UC Berkeley, California, USA</p>
      </div>
      <div class="mexico-txt1 hide1">
        <p>Presented my paper at CDC 2022, Cancun, Mexico</p>
      </div>
      <div class="miami-txt1 hide1">
        <p>Presented my paper at the CDC 2018, in Miami, Florida, USA</p>
      </div>
      <div class="france-txt1 hide1">
        <p>Presented my paper at CDC 2021, in Nice, France</p>
      </div>
      <div class="padova-txt1 hide1">
      <p>Presented my paper at SYSID 2021, in Padova, Italy (Virtual)</p>
    </div>
    <div class="barcelona-txt1 hide1">
    <p>Presented my paper at ICASSP 2020, in Barcelona, Spain (Virtual)</p>
  </div>
      <div class="korea-txt1 hide1">
        <p>Presented my paper at CDC 2022, in Jeju, South Korea (Virtual)</p>
      </div>
      <div class="singapore-txt1 hide1">
        <p>Presented my paper at CDC 2023, in Singapore</p>
      </div>
      </div>
      <div class="section white">
      <div class="container-pics">
      <div class="gallery-item">
          <img src="assets/images/phdthesis1.png" alt="Image 1">
      </div>
      <div class="gallery-item">
          <img src="assets/images/phdthesis2.jpg" alt="Image 2">
      </div>
      <div class="gallery-item">
          <img src="assets/images/phddefense1.jpg" alt="Image 3">
      </div>
      <div class="gallery-item">
          <img src="assets/images/phddefense2.jpg" alt="Image 4">
      </div>
      <!-- Add more images as needed -->
  </div>
      </div>
      `,

      'rect-UCB': `
      <div class="section white">
      <div class="center-text">
        <h3><a href="https://www.berkeley.edu/" target="_blank">University of California, Berkeley</a></p></h3>
        <p><strong>Research visitor, 05/2022-08/2022</strong></p>
        <p style="font-size: smaller; font-style: italic; text-align: center;">🚀 No. 1 U.S. public university, 9th best in the world overall  <a href="https://www.timeshighereducation.com/world-university-rankings/2024/world-ranking" target="_blank">Link</a></p>
      </div>
       <p>I joined Professor <a href="https://people.eecs.berkeley.edu/~sastry/" target="_blank"> Shankar Sastry</a>'s <a href="https://scholar.google.se/citations?user=KgZxzjsAAAAJ&hl=en&oi=ao" target="_blank"> <i class="fas fa-graduation-cap"></i> </a> group at UC Berkeley for a five months research collaboration working on a variety of control topics, under the C3.ai DTI (Digital Transformation Institute) program and with funding awarded by WASP. </p>
       <p> I also collaborated with  <a href="http://people.eecs.berkeley.edu/~anca/" target="_blank"> Anca Dragran</a>'s <a href="https://scholar.google.se/citations?user=UgHB5oAAAAAJ&hl=en&oi=ao" target="_blank"> <i class="fas fa-graduation-cap"></i> </a> group, in particular Andreea Bobu <a href="https://scholar.google.se/citations?user=UgHB5oAAAAAJ&hl=en&oi=ao" target="_blank"> <i class="fas fa-graduation-cap"></i> </a> working on human-robot interaction and feature representations.</p> <p> &#x1F399; During these months I gave two talks at UC Berkeley and one talk at <a href="https://www.stanford.edu/" target="_blank">Stanford University</a>, at <a href="https://iliad.stanford.edu/" target="_blank">Dorsa sadigh</a>'s <a href="https://scholar.google.com/citations?user=ZaJEZpYAAAAJ&hl=en" target="_blank"> <i class="fas fa-graduation-cap"></i> </a> group.</p>
       </div>
      `,

        'rect-WASP':  `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://wasp-sweden.org/" target="_blank">WASP <br>Wallenberg AI and Software Program</a></h3>
          <p><strong>Graduate student, 2019-2023</strong></p>
        </div>
        '<p>WASP the largest individual research program in Sweden and focuses on funding and developing strategical research, education and faculty recruitment in the aeras of AI and autonomous systems. </p>
        <p>I was accepted as an affiliated WASP graduate student, at batch 1 of the Explainable Machine Learning (MLX) track. I attended courses in several Swedish universities, winter conferences, summer schools, international trips, and research arenas. 
        </div> 
        <div class="section black">
        Courses:<br>
        <ul>
        <li>Ethical, Legal and Societal aspects of AI and Autonomous Systems - Umea </li>
        <li>AI and Machine Learning - city  </li>
        <li>Graphical Models, Bayesian Learning and Statistical Relational Learning  </li>
        <li>Learning theory, reinforcement learning - Stockholm,  </li>
        <li>Scalable Data Science and Distributed Machine Learning   </li>
        </ul>
        </p> </div>
        <div class="section white">
        <p>Conferences and trips: <br>
        <ul>
        <li> 2023 Winter Conference. Gothenburg & Linköping. + Poster </li>
        <li> Study trip to the UK: University of Cambridge, University of Oxford, Imperial College London, King's College London, ARM, and Astra Zeneca. (October 2022) + Poster. </li>
        <li> 2022 Winter Conference. Gothenburg & Linköping. + Poster </li>
        <li> Summer school </li>
        <li> Study trip to Germany: RWTH Aachen University, TU Darmstadt, and Max Planck Institute for Intelligent Systems. (November 2019) + Poster </li>
        <li> 2019 Winter Conference. Gothenburg & Linköping. + Poster </li> 
        </p>
        </div>
        <div class="section blue">
        <p>  &#127942; Funding for exchange visit at UC Berkeley.</p>
        </div>
        <div class="section black">
         <div id="svg-container-height200">
         <!-- Embed the base SVG file -->
         <object id="world-svg" type="image/svg+xml" data="assets/images/worldmap_sweden.svg" width="400" height="400"></object>
         <!-- Overlay SVG elements -->
         <svg width="400" height="400">
         <circle
         class="cls-2 marker-sweden2 expandable-circle2"
         cx="286"
         cy="140.09317"
         id="circle276"
         style="fill:#d40000;stroke-width:1.76472"
         r="10" /><circle
         class="cls-2 marker-gotenburg expandable-circle2"
         cx="255.05969"
         cy="150.37109"
         id="circle276-6-4"
         style="fill:#ff9955;stroke-width:1.76472"
         r="10" /><circle
         class="cls-2 marker-uk2 expandable-circle2"
         cx="175.79443"
         cy="215.03943"
         id="circle276-6-4-3"
         style="fill:#ff6600;stroke-width:1.76472"
         r="10" /><circle
         class="cls-2 marker-germany2 expandable-circle2"
         cx="235"
         cy="230"
         id="circle276-6-4-3-2"
         style="fill:#ff6600;stroke-width:1.76472"
         r="10" /><circle
         class="cls-2 marker-linkoping expandable-circle2"
         cx="275"
         cy="155"
         id="circle276-6-4-2"
         style="fill:#ff9955;stroke-width:1.76472"
         r="10" /><circle
         class="cls-2 marker-lund expandable-circle2"
         cx="270"
         cy="173"
         id="circle276-6-4-8"
         style="fill:#ff9955;stroke-width:1.76471"
         r="10" /><circle
         class="cls-2 marker-umea expandable-circle2"
         cx="286"
         cy="100"
         id="circle276-6-4-8-4"
         style="fill:#ff9955;stroke-width:1.76472"
         r="10" />
           </svg>
       </div>
       <div class="sweden-txt2 hide1">
       <p>Theoretical ML course, KTH, Stockholm</p>
      </div>
      <div class="germany-txt2 hide1">
      <p>International trip to Germany</p>
     </div>
     <div class="uk-txt2 hide1">
     <p>International trip to London, Cambridge and Oxford, UK</p>
    </div>
    <div class="gotenburg-txt hide1">
    <p>AI Course and winter conference, Chalmers, Gotenburg</p>
   </div>
   <div class="linkoping-txt hide1">
   <p>AI course and winter conference, LiU, Linkoping</p>
  </div>
  <div class="lund-txt hide1">
  <p>AI course, Lund University, Lund</p>
 </div>
 <div class="umea-txt hide1">
 <p>Ethical AI course, Umea University, Umea</p>
</div>
        </div>  
        <div class="section white">
        <div class="container-pics">
        <div class="gallery-item">
            <img src="assets/images/WASP3.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
            <img src="assets/images/WASP-UK.jpg" alt="Image 2">
        </div>
        <div class="gallery-item">
        <img src="assets/images/WASP.jpg" alt="Image 2">
    </div>
    <div class="gallery-item">
    <img src="assets/images/WASP2.jpeg" alt="Image 2">
</div>
        </div>
        </div>
        `,

        'rect-IST': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://tecnico.ulisboa.pt/pt/" target="_blank">Instituto Superior Tecnico</a></h3>
          <p><strong>B.Sc. and M.Sc. 2012-2018</strong></p>
          <p style="font-size: smaller; font-style: italic; text-align: center;">🚀 11th best European engineering school. <a href="hhttps://tecnico.ulisboa.pt/pt/noticias/areas-cientificas-do-tecnico-entre-as-50-melhores-do-mundo-de-acordo-com-o-ranking-de-xangai/" target="_blank">Link</a></p>
        </div>
        <p>Master of Electrical Engineering and Computer Science, with major in Systems, Decision and Control and minor in Computers. </p>
        <p> &#127942; Academic Excellence and Merit diplomas awarded in 4 years of the course. Masters grade: 18/20</p> 
        </div>
        <div class="section black">
        <p>Selected courses: </p>
        <ul>
        <li> Autonomous Systems, Machine Learning, Image Processing and Vision, Artificial Intelligence, Optimization, Automatic Control, Databases, Internet Based Systems Architecture. </li>
        </ul>
        </div>
        `,

        'rect-NTNU': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://www.ntnu.edu/" target="_blank">NTNU Norwegian University of Science and Technology</a></h3>
          <p><strong>Exchange, 01/2017-06/2017</strong></p>
        </div>
        <p>Erasmus exchange program at NTNU during M.Sc. degree.</p>
        <p>30 credits in Robotics, Web-Intelligence, Multimedia Signal Processing and Industrial Engineering, with a grade of 18/20.</p>
        </div>
        `,

        'rect-Champ': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://www.fchampalimaud.org/" target="_blank">Champalimaud Foundation</a></h3>
          <p><strong>Collaboration during Master thesis, 2018</strong></p>
          <p style="font-size: smaller; font-style: italic; text-align: center;">🚀 Top institution in Portugal <a href="https://www.timeshighereducation.com/world-university-rankings/2024/world-ranking" target="_blank">Link</a></p>
        </div>
        <p>To explore my interest for robotics and neuroscience I proposed a collaboration between IST and Champalimaud Foundation for my Master thesis. With my supervisor, Prof. Rodrigo Ventura <a href="https://scholar.google.se/citations?user=sftSuj8AAAAJ&hl=en&oi=ao" target="_blank"> <i class="fas fa-graduation-cap"></i> </a>, and the <a href="https://fchampalimaud.org/research/groups/paton" target="_blank">Learning lab</a> headed by Joe Paton <a href="https://scholar.google.se/citations?user=sftSuj8AAAAJ&hl=en&oi=ao" target="_blank"> <i class="fas fa-graduation-cap"></i> </a>, we studied how the learning algorithms of the brain concerning the judgment of the passage of time - studied in mice - could be implemented in robots: “Temporal Perspectives: Exploring a robot's perception of time”. </p>
        </div>
        <div class="section blue">
        <p> &#127942; With the paper "Teaching Robots to Perceive Time: A Twofold Learning Approach" derived from this work we received the Best Paper and Best Student Paper Award at IEEE International Conference in Development and Learning (ICDL-Epirob, 2020).</p>
        </div>
        `,

        'rect-Gulbenkian': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://gulbenkian.pt/ciencia/" target="_blank">Gulbenkian Science Institute</a></h3>
          <p><strong>Summer internship 06/2017-07/2017 </strong></p>
          <p style="font-size: smaller; font-style: italic; text-align: center;">🚀 Top research institute in Portugal  <a href="https://www.timeshighereducation.com/world-university-rankings/2024/world-ranking" target="_blank">Link</a></p>
        </div>
        <p>In the summer of 2017 I joined the <a href="https://gulbenkian.pt/ciencia/research-groups/lchikhi/" target="_blank">Population and Conservation Genetics group</a> of Gulbenkian Science Institute, headed by Lounes Chikhi <a href="https://scholar.google.se/citations?user=h4KZJ_cAAAAJ&hl=en&oi=ao" target="_blank"> <i class="fas fa-graduation-cap"></i> </a>. There I had the first encounter with research, working on evolutionary biology for using coalescence models to model the geographic evolution of species, applying methods from model optimization and implementation of algorithms. </p>
        </div>
        `,

        'rect-others': `
        <div class="section white">
        <div class="center-text">
          <h3>Other internships</h3>
        </div>
        </div>
        <div class="section black">
        <p><strong>Robot ChampionChip - Instituto Politécnico de Tomar, Portugal.</strong></p>
        <o>Use of Arduino to implement path planning and line following strategies in ROS for an autonomous robots competition.</p>
        </div>
        <div class="section blue">
        <p><strong>Electronics - INESC-ID</strong></p>
        <p> Microcircuit and PCB design and printing. </p>
        </div>
        <div class="section white">
        <p><strong>Molecular docking internship - Faculdade de Farmacia, Lisboa.</strong></p>
        <p>Use of PyMOL and MOE software to study molecular docking applied to Chronic Obstructive Pulmonary Disease (COPD).</p>
        </div>
        `,

        'rect-scaleup':  `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://scaleuprobotics.com" target="_blank">Scaleup Robotics</a></h3>
          <p><strong>Consultant, 2023-Present </strong></p>
        </div>
        <p>Joined the 2 cofounders of Scaleup Robotics, a Cloud robotics startup in EdTech. My roles: <ul>  
        <li>Development of teaching modules and robotics tutorials for education. HTML, VueJS, CSS, Git</li>
        <li>Leading a robotics workshop with the San Francisco Library for the SF Tech Week</li>   
        <li>Outreach and sales</li>    
        <li>Brand design including website and flyers.</li> 
        </ul>  
        </div>
        `,

        'rect-uncrux': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://www.kth.se/en/om/innovation/kth-innovation-1.956839" target="_blank">KTH Innovation</a></h3>
          <p><strong>2022/2023 Pre-incubator program </strong></p>
        </div>
        <p>Participated in KTH Innovation Discovery Program, and Pre-Incubator Program.</p>
        <p> Practical application of  project lifecycle from market research and funding to product launch. </p> <p>Product: climbing AI for route setting.</p>
        </div>
        `,

        'rect-junitec2': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://junitec.pt/home/" target="_blank">JUNITEC</a></h3>
          <p><strong>HR and Project manager, 2014-2016</strong></p>
        </div>
        </p> <p>Technical project manager: <ul>  
        <li>Heated Adjustable Pockets -  Development of adjustable temperature heated pockets with a colleague during a year, designed for helping a pianist from Patient Innovation with the Charcot Marie Tooth disease (Apr '15 - Aug '15). 
        <ul>
        <li> &#127942; 'Innovation Project of the Year' - Award given by JADE Portugal (European Confederation of Junior Enterprises) </li>
        <li> &#127942; Exhibition in London Science museum </li>
        <li> &#127942; Exhibition in pavilhao do conhecimento</li>  
        </ul> </li>
        <li> Lisbon Escape Game <a href="http://www.scapers.pt" target="_blank">Scapers Lisbon</a> - Development of the technical solutions for 4 escape games, result of the teamwork of a team of 8 people (Aug'16 - Feb '17).  </li>
        <li>3D Printing Workshops - 3D printing workshops given in IST to primary and high school students, within the program "Verão na Ulisboa" (2015).   </li>  
        <li>Wordpress Workshops ASPA - 2 Wordpress workshops given to "Asperger Syndrome Portuguese Association" (2015).
        </li>   </ul></p>
        </div>
        <div class="section blue">
        <p>HR manager heading a team of 6 people, organized events and interviewed more than 90 people. Team leadership, time management, social and communicational skills.
        </div>
        <div class="section black">
        <div class="container-pics">
        <div class="gallery-item">
            <img src="assets/images/junitec5.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
        <img src="assets/images/junitec6.png" alt="Image 1">
    </div>
        <div class="gallery-item">
            <img src="assets/images/junitec8.jpg" alt="Image 2">
        </div>
        <div class="gallery-item">
        <img src="assets/images/junitec9.png" alt="Image 1">
    </div>
        </div>
        </div>
        `,
        
        'rect-subvert': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="http://www.subvert.pt/en/" target="_blank">Subvert</a></h3>
          <p><strong>Technical Consultant, Jun-July 2016 </strong></p>
        </div>
        <p>IT consultant for Subvert architecture company. HTML and CSS programming for technological solutions for the project "Portugal dos Pequenitos", and newsletter creation. </p>
        </div>
        `,


        'rect-phdchapter': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://www.dr.kth.se/" target="_blank">PhD Chapter Board</a></h3>
          <p><strong>02/2020-12/2021</strong></p>
        </div>
        <p>Business manager:  <ul>  <li>Involved in doctoral student issues at KTH level - attended meetings as student representative</li>    <li>Led the first edition of the Supervisor of the Year award 2020 and was jury member for 2 years</li>  <li>Organised PhD participation in THS Armada career fair</li>   <li>Networking and reception events - Organized welcome reception lunches for new students</li>  </ul>  </p> <p>Master of ceremonies: <ul>  <li>Organised monthly PhD pubs</li> </ul>  </p>  <p> Board of nominations</p>
        </div>
        <div class="section black">
        <div class="container-pics">
        <div class="gallery-item">
            <img src="assets/images/SotY.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
        <img src="assets/images/phdchapter_flyer.png" alt="Image 1">
    </div>
    <div class="gallery-item">
    <img src="assets/images/phdchapter1.jpg" alt="Image 1">
</div>
<div class="gallery-item">
<img src="assets/images/phdchapter3.jpg" alt="Image 1">
</div>
<div class="gallery-item">
<img src="assets/images/phdchapter4.jpg" alt="Image 1">
</div>
<div class="gallery-item">
<img src="assets/images/phdchapter6.png" alt="Image 1">
</div>
<div class="gallery-item">
<img src="assets/images/phdchapter7.png" alt="Image 1">
</div>
        </div>
        </div>
        `,

        'rect-WOP': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://www.kth.se/blogs/wop/" target="_blank">WOP Women of Power</a></h3>
          <p><strong>Jan 2019-2022</strong></p>
        </div>
        <p>Head and board member of WOP@KTH, a KTH Female doctoral network led by women fighting for gender equality and women rights. </p> <p>Organised networking mingles, movie screening, and fundraising for events.</p>  <p> Organised the <a href="https://www.kth.se/blogs/wop/previous-activities/risingstars2019/" target="_blank">Rising Stars</a> two-day event at Djuronaset Hotel, with:  <ul>  <li>2 international speakers</li>  <li>Mental health & career planinng workshops.</li>  </p>
        </div>
        <div class="section black">
        <div class="container-pics">
        <div class="gallery-item">
            <img src="assets/images/WOP.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
        <img src="assets/images/wop3.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
        <img src="assets/images/wop4.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
        <img src="assets/images/wop5.png" alt="Image 1">
        </div>
        <div class="gallery-item">
        <img src="assets/images/wop6.png" alt="Image 1">
        </div>
        </div>
        </div>
        `,

        //'rect-others2': '<h3>Others</h3> <p><ul>  <li> SF angels</li> <li>CISV</li>  <li>Effective altruism</li>  </p>',

        'rect-others2': `
        <div class="section white">
        <div class="center-text">
            <h3>Others</h3> 
        </div>
        <div class="section white">
            <ul>
                <li>Volunteering in Effective Altruism conferences</li>
                <li>Delivery of food and school supplies to the homeless through San Francisco Urban Angels</li>
                <li>Monitor at CISV Children International Summer Villages </li>
                <li>Fund raising for Portuguese Oncology Institute</li>
                <li>Volunteering in Vagos Open Air, at Sleep 'Em All</li>
                <li>Volunteering at'Sniper' adventure park </li>
            </ul>
        </div>
        </div>
        <div class="section black">
        <div class="container-pics">
        <div class="gallery-item">
            <img src="assets/images/EA2.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
        <img src="assets/images/SFangels.jpg" alt="Image 1">
    </div>
    <div class="gallery-item">
    <img src="assets/images/SFangles2.jpg" alt="Image 1">
</div>
        </div>
        </div>
        `,

        
        'rect-GDH': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://www.kth.se/en/om/internationellt/globaldevelopmenthub/kth-global-development-hub-1.1335047" target="_blank">KTH Global Development Hub</a></h3>
          <p><strong>Staff exchange, 10/2023 </strong></p>
        </div>
        <p>3 week staff exchange at KTH partner universities in Africa: Botho University, Strathmore University, University of Rwanda.</p>
        <p> &#127942; Erasmus+ funding </p>
        <p> 📚 Meetings with faculty and students about digitalization, e-learning, and robotics and AI in Africa</p>
        <p> Gave 2 presentations on introduction and advanced robotics </p>
        <p> Visited universities, companies, NGOs, and robotic centers </p>
        </div>
        <div class="section black">
         <div id="svg-container-400">
         <!-- Embed the base SVG file -->
         <object id="world-svg" type="image/svg+xml" data="assets/images/worldmap_africa.svg" width="400" height="400"></object>
         <!-- Overlay SVG elements -->
         <svg width="400" height="400">
         <circle
         class="cls-2 marker-botswana expandable-circle"
         cx="270"
         cy="290.09317"
         id="circle276"
         style="fill:#ff9955;stroke-width:1.76472"
         r="12" /><circle
         class="cls-2 marker-kenya expandable-circle"
         cx="325.05969"
         cy="200.37109"
         id="circle276-6-4"
         style="fill:#ff9955;stroke-width:1.76472"
         r="12" /><circle
         class="cls-2 marker-rwanda expandable-circle"
         cx="295.79443"
         cy="205.03943"
         id="circle276-6-4-3"
         style="fill:#ff9955;stroke-width:1.76472"
         r="12" />
           </svg>
       </div>
       <div class="botswana-txt hide1">
       <p>Botho University, Gaborone, Botswana</p>
      </div>
      <div class="kenya-txt hide1">
      <p>Strathmore University, Nairobi, Kenya</p>
     </div>
     <div class="rwanda-txt hide1">
     <p>University of Rwanda, Kigali, Rwanda</p>
    </div>
        </div>  
        <div class="section black">
        <div class="container-pics">
        <div class="gallery-item">
            <img src="assets/images/GDH1.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
            <img src="assets/images/GDH2.jpg" alt="Image 2">
        </div>
    <div class="gallery-item">
    <img src="assets/images/GDH4.jpg" alt="Image 2">
</div>
<div class="gallery-item">
<img src="assets/images/GDH5.jpg" alt="Image 2">
</div>
        </div>
        </div>
        `,
      
        'rect-EWB': `
        <div class="section white">
        <div class="center-text">
          <h3><a href="https://www.ewb-swe.org/" target="_blank">Engineers Without Borders</a></h3>
          <p><strong>2022-present</strong></p>
        </div>
        <p>Development of a report on sustainable engineering, encomprising the different phases of an engineer lifecycle from education to retirement.</p> <p>Joined the construction team of the Asulma school and solar cooking project in Nairobi slums.</p>
        </div>
        <div class="section black">
        <div class="container-pics">
        <div class="gallery-item">
            <img src="assets/images/EWB.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
            <img src="assets/images/EWB1.jpg" alt="Image 2">
        </div>
    <div class="gallery-item">
    <img src="assets/images/EWB2.jpg" alt="Image 2">
</div>
        </div>
        </div>
        `,
    };

    document.getElementById('popup-description').innerHTML = descriptions[rectangleId];
    document.getElementById('popup').style.display = 'block';

    
    $(document).ready(function(){
      $(".hide1").hide();

      console.log("Document is ready");
      
      $(".marker-sweden").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
        $(".sweden-txt1").show();
      });
        $(".marker-berkeley").click(function(){
          $(".hide1").hide();
          console.log("Marker clicked");
        $(".berkeley-txt1").show();
      });
        $(".marker-chile").click(function(){
          $(".hide1").hide();
          console.log("Marker clicked");
        $(".chile-txt1").show();
      });
        $(".marker-mexico").click(function(){
          $(".hide1").hide();
        $(".mexico-txt1").show();
      });
      $(".marker-miami").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".miami-txt1").show();
      });
      $(".marker-france").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".france-txt1").show();
      });
      $(".marker-barcelona").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".barcelona-txt1").show();
      });
      $(".marker-padova").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".padova-txt1").show();
      });
      $(".marker-korea").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".korea-txt1").show();
      });
      $(".marker-singapore").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".singapore-txt1").show();
      });

      $(".marker-sweden2").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".sweden-txt2").show();
      });
      $(".marker-uk2").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".uk-txt2").show();
      });
      $(".marker-germany2").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".germany-txt2").show();
      });
      $(".marker-linkoping").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".linkoping-txt").show();
      });
      $(".marker-lund").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".lund-txt").show();
      });
      $(".marker-umea").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".umea-txt").show();
      });
      $(".marker-gotenburg").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".gotenburg-txt").show();
      });

      $(".marker-botswana").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".botswana-txt").show();
      });
      $(".marker-kenya").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".kenya-txt").show();
      });
      $(".marker-rwanda").click(function(){
        $(".hide1").hide();
        console.log("Marker clicked");
      $(".rwanda-txt").show();
      });

    });
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Close the popup if the user clicks outside of the popup content
window.onclick = function(event) {
  var popup = document.getElementById('popup');
  if (event.target == popup) {
      hidePopup();
  }
}



///////////////////////////
//  For the Hobbies map
//////////////////////////

$(document).ready(function(){
    $(".hide").hide();

    console.log("Document is ready");
    
    $(".marker-sweden").click(function(){
      $(".hide").hide();
      console.log("Marker clicked");
      $(".sweden-txt").show();
    });
    
      $(".marker-usa").click(function(){
         $(".hide").hide();
         console.log("Marker clicked");
      $(".usa-txt").show();
    });
    
      $(".marker-portugal").click(function(){
         $(".hide").hide();
         console.log("Marker clicked");
      $(".portugal-txt").show();
    });
    
      $(".marker-mexico").click(function(){
         $(".hide").hide();
      $(".mexico-txt").show();
    });
  
  });