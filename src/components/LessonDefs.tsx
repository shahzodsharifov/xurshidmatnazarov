import React from "react";
import { LessonDefContainer } from "../styles/Home";
import Study from "../img/study.svg"
import Vlog from "../img/speed.svg"
import Chat from "../img/book.svg"

interface LessonDefProps{
    lessonDefLabel: string
    lessonDefDesc: string
    lessonDefImageName: string
}

function LessonDefs({lessonDefLabel, lessonDefDesc, lessonDefImageName}:LessonDefProps) {

    var lessonImage : any;
    var isVlog: boolean = false

    if(lessonDefImageName ==="Study") {
        lessonImage = Study
    }else if (lessonDefImageName ==="Vlog") {
        lessonImage = Vlog
        isVlog = true
       
    } else if (lessonDefImageName ==="Chat") {
        lessonImage = Chat
       
    }
    return (
       <LessonDefContainer style={ isVlog ? {backgroundColor:"#655CED"}: {backgroundColor: "white"}}>
           <img src={lessonImage}/>
           <h2 style={isVlog ? {color: "white"}: {color: "black"}}>{lessonDefLabel}</h2>
           <p  style={isVlog ? {color: "white"}: {color: "black"}}>{lessonDefDesc}</p>
       </LessonDefContainer>
    )
}

export default LessonDefs;