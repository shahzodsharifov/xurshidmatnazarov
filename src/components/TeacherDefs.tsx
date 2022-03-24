import React, { ReactComponentElement } from "react";
import { DefContainer, DefImage } from "../styles/Home";
import StarIcon from "../img/star.svg"
import ImageIcon from "../img/imageIc.svg"
import ChatIcon from "../img/chat.svg"


interface TeacherDefsProps {
    defLabel: string
    defDesc: string
    defImage: string
}

function TeacherDefs({defLabel, defDesc, defImage}:TeacherDefsProps) {
    
  var theImage: string = ""
  
  if(defImage ==="Star") {
      theImage = StarIcon;
  }else if(defImage ==="Image") {
      theImage = ImageIcon;
  }else if(defImage ==="Chat") {
      theImage = ChatIcon;
  }

    return(
        <DefContainer>
            <DefImage>
                <img src={theImage} width="100px"/>
            </DefImage>

            <h2>{defLabel}</h2>
            <p>{defDesc}</p>
        </DefContainer>
      
    )
}

export default TeacherDefs
