import React from "react";
import NavBar from "../components/NavBar";
import {  MoreInfoContainer, TheInfo } from "../styles/MoreInfo";


function MoreInfo() {
    return(
      <div>
            <NavBar/>
          <MoreInfoContainer>
          <div className="theMoreText">
          <h2>Ingliz tilini istalgan joyda va istalgan vaqtda o'rganing</h2>
              </div>  
          </MoreInfoContainer>
         <TheInfo>
          <div className="tgAddress">
          <h2>Ko'proq ma'lumot uchun 👉🏻<a href="https://t.me/xurshidmatnazarov">@xurshidmatnazarov</a> murojaat qiling
           </h2>
          </div>
        </TheInfo>  

        </div> 
       
    )
}

export default MoreInfo;