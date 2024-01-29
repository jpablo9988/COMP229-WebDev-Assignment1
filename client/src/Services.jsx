import Services1 from '../src/assets/services1.jpg';
import Services2 from '../src/assets/services2.jpeg';
import Services3 from '../src/assets/services3.jpg';
import Services4 from '../src/assets/services4.png';


export default function Services() {
    return (
    <>
            <h2> What can I offer? </h2>
            <p>
                <div class = "container"></div>
                    <ul class = "myUL">
                        <li> <b>Full-stack & Videogame Programming</b> (Unity, Unreal, Godot, Gamemaker)
                            <img src={Services3}alt="services3" className="picture" width="320x" height="180px"/>
                             </li>
                        <li> <b>Concept & 2D Art</b> </li>
                            <img src={Services2}alt="services2" className="picture" width="320x" height="180px"/>
                        <li> <b>Pixel Art</b> </li>
                            <img src={Services4}alt="services4" className="picture" width="320x" height="180px"/>
                        <li> <b>Music Composition & Production </b>
                            <img src={Services1}alt="services1" className="picture" width="320x" height="180px"/>
                        </li>
                        
                    </ul>
            </p>
    </>
    );
    }