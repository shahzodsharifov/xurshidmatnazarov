import React from "react";
import ReactPlayer from "react-player";
import NavBar from "../components/NavBar";
import { AdVideoContainer, VideosContainer } from "../styles/Videos";

function Videos() {
    return(
        <div className="main-videos">
       <NavBar/>
       <AdVideoContainer>
           <div className="vid1">

           <h2>Video Darslar</h2>    
           <iframe 
            src="https://www.youtube.com/embed/1D8zP73lGyI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            frameBorder={"0"}
            allowFullScreen></iframe>

         
           </div>    
          <div className="adInfo">
          <h2>Everbest: Lesson 18 - Passive Voice. O'zbek Tilida</h2>  
          <div className="adCredits">
              <p> by Xurshid Matnazarov</p>
              <p> Mavzu: Ingliz tili grammatikasi</p>
          </div>
          </div>
    
       </AdVideoContainer>
       <VideosContainer>

        <h2> Top Videolar</h2>

        <div className="first-video">
        <div className="1st">
        <iframe 
        src="https://www.youtube.com/embed/EKoPTiGXnKQ" 
        title="YouTube video player"
        frameBorder={"0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>

        </iframe>

        <h4>Time Clause - O'zbek Tilida</h4>
        </div>


     <div className="2nd">
     <iframe
         src="https://www.youtube.com/embed/-MNQf-ZUL3Q" 
         title="YouTube video player" frameBorder={"0"}
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowFullScreen></iframe>
         <h4>Noto'gri Talafuz</h4>
     </div>

         
      <div className="3rd">
      <iframe
         src="https://www.youtube.com/embed/WlMWQuI9Rrg" 
         title="YouTube video player" frameBorder={"0"}
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowFullScreen></iframe>
         <h4>Clauses of Contrast</h4>
      </div>

      <div className="4th">
      <iframe
         src="https://www.youtube.com/embed/RV-5oDK-j2Q"
         title="YouTube video player" frameBorder={"0"}
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowFullScreen></iframe>
         <h4>Clauses of Contrast</h4>
      </div>
        </div>
       </VideosContainer>
        </div>
    )
}

export default Videos;