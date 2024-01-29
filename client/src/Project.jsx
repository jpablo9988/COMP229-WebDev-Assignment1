/*
     File Name: Project.jsx
          Returns the HTML information for the PROJECT page.
     Student Name: Juan Pablo Amorocho
     Student ID: 301410163
     Date: 28/01/2024
*/

import Project1 from '../src/assets/project1.jpg';
import Project2 from '../src/assets/project2.jpg';
import Project3a from '../src/assets/project3a.png';
import Project3b from '../src/assets/project3b.png';

export default function Project()
{
    return(
        <>
            <h2> My Projects! </h2>
            <div class = "container">
                <ul class = "myUL">
                    <li class = "myUL_li"> 
                        <h3> Salad Days </h3>
                        <img src={Project1}alt="project1" className="picture" width="200x" height="200px"/>
                        <p> Salad days is a Farming & Cooking RPG Sim being developed by 
                            <a href="https://www.instagram.com/toasterworks/?hl=en"> Toaster Works.</a></p>
                        <p> I'm the main composer and all-rounder for the game.</p>
                        <p> Here's an example of one of my composed tracks, <b>Umami Town:</b> <br></br>
                        <audio src="./src/assets/project1_music.ogg" controls>
                            <p> Your browser doesn't support this audio.</p>
                        </audio>
                        </p>
                    </li>
                    <li class = "myUL_li">
                        <h3> Vectro Blast & Spellborn </h3>
                        <img src={Project2}alt="project2" className="picture" width="250px" height="175px"/>
                        <p> Vectro Blast is an arcade top-down shooter being developed by 
                            <a href="https://sagittaras.cz/"> Sagittaras Games.</a></p>
                        <p> Spellborn is an upcoming MMORPG Clicker Game developed by this same company.<br></br>
                        I'm a programmer for this projects. </p>
                        <p> You can check out Vectro Blast  
                            <a href="https://play.google.com/store/apps/details?id=com.SagittarasGames.VectroBlast"> here.</a></p>
                    </li>
                    <li class = "myUL_li"> 
                        <h3> Game Jams </h3>
                        <p> I have developed a couple of game jams in the past. Here is an example of some of them.</p>
                        <div class = "container">
                            <ol> 
                                <li>
                                    <h4>Society of Killers</h4>
                                    <img src={Project3a}alt="project3" className="picture" width="200px" height="150px"/>
                                    <p>
                                        Society of Killers is a procedurally-generated murder mystery visual novel <br></br>
                                        Developed by <b>PixelDoom</b> (me) and <b>IgnatiusYote</b> (Gabriel Ruiz) in a week for the Pixel Game Jam. <br></br>
                                        You can find this project <a href="https://pixeldoom.itch.io/society-of-killers"> here.</a>
                                    </p>
                                </li>
                                <li>
                                    <h4>RNGesus: Wrongly Rolled</h4>
                                    <img src={Project3b}alt="project3" className="picture" width="200px" height="150px"/>
                                    <p>
                                        RNGesus: Wrongly Rolled is a puzzle game developed for the GMToolkit game jam in one week. <br></br>
                                        This game was developed by <a href="https://team-tuna.itch.io">Team Tuna</a>, where I was one of the main artists and designers, <br></br>
                                        You can find this project <a href="https://team-tuna.itch.io/rngesus"> here.</a>
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}