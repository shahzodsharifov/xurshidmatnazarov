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
        <h1>Mening ismim Xurshid va men ingliz tili o'qituvchisiman</h1>
        <p>YouTube kanalimda ingliz tili grammatikasi bo'yicha sifatli videodarslar joylangan</p>
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
    <TeacherDefs defImage="Star" defLabel={"Mutaxassis"} defDesc={"5+ yillik tajribaga va maxsus malakaga egaman "}/>
    <div className="secondDef">
    <TeacherDefs  defImage="Image" defLabel={"Vloger"} defDesc={"Ingliz tili bo'yicha qiziqarli vloglar tayyorladik"}/>
    </div>
    <TeacherDefs  defImage="Chat" defLabel={"Yordamga shayman"} defDesc={"Ingliz tili bo'yicha savollaringizga qo'ldan kelgancha sodda javob qaytaraman"}/>
    </div>
    <LabelAboutMe>
      <h2>Onlayn Kurslar Bilan</h2>
    </LabelAboutMe >
  
    <div className="lessonDefs">
      
   <div onClick={()=>{
      window.location.href = "https://youtube.com/playlist?list=PLDAYuGne_fs9PBGHRTPo8oe2qZs9noKB2"
   }}>
   <LessonDefs lessonDefImageName="Study" lessonDefLabel="Xohlagan joyda o'qing" lessonDefDesc="Darslar video formatda bo'lgani uchun sizga faqat istak va internet kerak"/> 
   </div>

  <div  onClick={()=>{
      window.location.href = "https://youtube.com/playlist?list=PLDAYuGne_fs9PBGHRTPo8oe2qZs9noKB2"
   }} >
  <LessonDefs lessonDefImageName="Vlog" lessonDefLabel="O'z tezligingizda o'rganing" lessonDefDesc="Videodarslarni yuklab olishingiz va o'zingizga qulay paytda tomosha qilishingiz mumkin"/> 
  </div>
  
   <div  onClick={()=>{
      window.location.href = "https://youtube.com/playlist?list=PLDAYuGne_fs9PBGHRTPo8oe2qZs9noKB2"
   }}>
   <LessonDefs lessonDefImageName="Chat" lessonDefLabel="Keng doiradagi mavzular" lessonDefDesc="Men ingliz tili grammatikasidagi deyarli barcha mavzularni tushuntirganman"/> 
   </div>
    </div>



     </MainBody>

     <Footer/>
     
     </div>

    
  );
}

export default App;
