import React from 'react';
import {  IntroText, LabelAboutMe, LandingBtns, MainBody, MainOutlineBtn, MainSolidBtn, ProfilePic } from './styles/Home';
import teacherPicture from "./img/teacher.svg"
import TeacherDefs from "./components/TeacherDefs"
import LessonDefs from './components/LessonDefs';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
   <div className="main">
    <title>Xurshid Matnazarov</title>
    <NavBar/>
    <MainBody>
   
     <div className="land-beginning">
      <div className="text-info">
      <IntroText>
        <h1>Mening ismim Xurshid va men Ingliz tili o'qituvchisiman</h1>
        <p>YouTube kanalimda ingliz tili mavzulari boyicha sifatli videolarim bor</p>
      </IntroText>

      <LandingBtns>
        
          <MainSolidBtn onClick={()=> {
            window.location.href = "https://www.youtube.com/c/XurshidMatnazarov"
          }}>YouTube</MainSolidBtn>
       
        <MainOutlineBtn onClick={()=> {
            window.location.href = "https://t.me/english_quiz_test"
          }}>Telegram</MainOutlineBtn>
      </LandingBtns>
      </div>
     
     <ProfilePic>
      <img src={teacherPicture} className="teacher-picture" alt=""/>
     </ProfilePic>
     </div>


    <LabelAboutMe>
      <h2>Men Haqimda</h2>
      <h1>Ma'lumotlar</h1>
    </LabelAboutMe>


    <div className="definitions">
    <TeacherDefs defImage="Star" defLabel={"Ekspert"} defDesc={"Ingliz tili ta’limi boyicha 5+ yillik tajriba. "}/>
    <div className="secondDef">
    <TeacherDefs  defImage="Image" defLabel={"Vlogger"} defDesc={"Ingliz tili boyicha qiziqarli vloglar"}/>
    </div>
    <TeacherDefs  defImage="Chat" defLabel={"Yaxshi inson"} defDesc={"Hattoki faqat salom demoqchi bolsangiz ham bemalol yozavering"}/>
    </div>
    <LabelAboutMe>
      <h2>Onlayn Kurslar Bilan</h2>
    </LabelAboutMe >
  
    <div className="lessonDefs">
      
   <LessonDefs lessonDefImageName="Study" lessonDefLabel="Xoxlagan joyda o'qing" lessonDefDesc="Darslar video formatda bolgani uchun sizga faqat istak va internet kerak"/> 
   <LessonDefs lessonDefImageName="Vlog" lessonDefLabel="O'z tezliginigzda o'rganing" lessonDefDesc="Darslarni xohlasangiz yuklab oling va ozingzni vaqtingizga qarab ko’rishingiz mumkin"/> 
   <LessonDefs lessonDefImageName="Chat" lessonDefLabel="Keng doiradagi mavzular" lessonDefDesc="Men ingliz tili grammatikasining asosi bo'lgan 32ta mavzuni tushuntirib otdim"/> 
    </div>



     </MainBody>

     <Footer/>
     
     </div>

    
  );
}

export default App;
