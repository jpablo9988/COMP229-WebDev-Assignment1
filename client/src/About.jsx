
import MePicture from '../src/assets/aboutmepic.jpg';

export default function About() {
     return (
        <>
            <h2> Who am I? </h2>

            <img src={MePicture}alt="myself" className="picture" width="175x" height="175px"/>

            <body>
            <p>
                My name is <b>Juan Pablo Amorocho</b>, I'm a 26 y/o from Colombia. <br></br>
            </p>
            <p>
                Ever since I was little I loved creating stuff. I also loved playing games.<br></br>
                This eventually developed into a passion for creating games. <br></br>
                I love the process of it. I love coding, making art, making music and designing the levels. <br></br>
            </p>
            <p> You can find my resume <a href = '../src/resources/cv.pdf'>here.</a> </p>
            </body>

            
        </>
        );
    }
    