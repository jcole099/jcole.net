import james from '../imgs/jamescole.png';

function About() {
  return (
    <div className="aboutPage">
      <h1>About</h1>
      <div id="photoTextSplit">
        <div id="text">
          <p>
            Hello! My name is James and I am a software developer. I enjoy
            creating software that people will find useful and fun. I currently
            live on the Oregon Coast and am pursuing my bachelor's degree in
            computer science at Oregon Statue University.
          </p>
          <p>
            I have an interest in a wide array of applications and mediums. As
            you will hopefully see on my Projects page, my interests expand
            beyond just a few programming languages. My curiousity for how
            different applications and systems work drives my interest in
            learning. In software development, everything is a passion project
            for me, truly.
          </p>
          <p>
            My interest in software development was sparked when as a teenager I
            discovered Visual Basic. Through the Visual Basic IDE I was able to
            create rudimentary applications for the Windows OS. At the time I
            did my best to peice together bits of information on how to navigate
            the Windows API. My early experiences with Visual Basic has left a
            life-long desire to create and innovate.
          </p>
        </div>
        <div id="photo">
          <img id="james" src={james}></img>
        </div>
      </div>
      <p>
        I hope that you will take a few moments to browse through some of the
        projects that I have created. Additionally, I would be happy to network
        and/or discuss any technologies. Feel free to reach out and say 'Hi' via
        my Contacts page.
      </p>
      <h2>Skills</h2>
      <div id="gridContainer">
        <div></div>
        <div></div>
        <div>
          <b>Familiar</b>
        </div>
        <div>
          <b>Confident</b>
        </div>
        <div>
          <b>Proficient</b>
        </div>
        <div className="gridTextLabel">JavaScript</div>
        <div className="proficientBar js"></div>
        <div className="gridTextLabel">CSS</div>
        <div className="proficientBar css"></div>
        <div className="gridTextLabel">HTML</div>
        <div className="proficientBar html"></div>
        <div className="gridTextLabel">Assembly</div>
        <div className="confidentBar assembly"></div>
        <div></div>
        <div className="gridTextLabel">Python</div>
        <div className="confidentBar python"></div>
        <div></div>
        <div className="gridTextLabel">Git</div>
        <div className="confidentBar git"></div>
        <div></div>
        <div className="gridTextLabel">Linux CLI</div>
        <div className="confidentBar linux"></div>
        <div></div>
        <div className="gridTextLabel">React</div>
        <div className="confidentBar react"></div>
        <div></div>
        <div className="gridTextLabel">Blender 3d Modeling</div>
        <div className="confidentBar blender"></div>
        <div></div>
        <div className="gridTextLabel">SQL</div>
        <div className="familiarBar sql"></div>
        <div></div>
        <div></div>
        <div className="gridTextLabel">MongoDB</div>
        <div className="familiarBar mongodb"></div>
        <div></div>
        <div></div>
        <div className="gridTextLabel">Unreal Engine</div>
        <div className="familiarBar unreal"></div>
        <div></div>
        <div></div>
        <div className="gridTextLabel">GIMP Image Editor</div>
        <div className="familiarBar gimp"></div>
        <div></div>
        <div></div>
        <div className="gridTextLabel">C++</div>
        <div className="familiarBar cpp"></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
