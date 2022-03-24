import styled from "styled-components";


export const MainBody = styled.div`
    background-color: white;
   @media only screen and (min-width: 1000px) {
    padding: 10px 140px;

    .land-beginning {
        display: flex;
        margin-top: 40px;
        justify-content: space-between;
    }

   .teacher-picture {
       width: 400px;
   }

   .definitions {
       display: flex;
       justify-content: space-between;

       .secondDef{
           margin-top: 60px;
       }
   }

   .lessonDefs {
       display: flex;
       justify-content: space-between;
   }


   }


    @media only screen and (max-width: 1000px) {
        padding: 0px 32px;
    }
`


export const NavContainer = styled.div`
   
 

@media only screen and (min-width: 1000px) {
    .btn {
       border: none;
       background-color: transparent;
       display: none;
   }

   .nav-items > a {
    color: black;
    font-size: 24px;
    text-decoration: none;
    margin: 15px;
    position: relative;

   }

   .nav-items > a:hover {
        color: #655CED;
   }
}

   


   

   @media only screen and (max-width: 1000px) {
        .btn {
            display: block;
            border: none;
            background-color: transparent;
        }

        .nav-items {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 60px;
            right: 0;
            display: flex;
            flex-direction: column;
            background-color: #655CED;
            transform: translateX(-100%);
            transition: all .45s;
        
        }

        .nav-items > a:before {
        background: transparent;
    }

        .nav-items > a {
        color: white;
        font-size: 25px;
        text-decoration: none;
        margin: 15px;
        position: relative;
        opacity: 1;
   }

   .nav-items.open {
       transform: translateX(0);
   }
     
       
   }

`

export const BodyHeader = styled.div`
    @media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;

    h1{
            color: #655CED;
            font-size: 36px;
        }
    }


    @media only screen and (max-width: 1000px) {
        display: flex;
        justify-content: space-between;
        padding: 20px ;

        h1{
            color: #655CED;
        }
    }
`



export const IntroText = styled.div`


@media only screen and (min-width: 1000px) {
    h1 {
        font-size: 54px;
        width: 650px;
    }

    p {
        margin-top: 20px;
        font-size: 32px;
        width: 600px;
        color: #565252;
    }
}


@media only screen and (max-width: 1000px) {
       margin-top: 40px ;
       h1 {
           font-size: 36px;
           text-align: center;
        

       }
       p { 
           margin-top: 20px ;
           text-align: center ;
           font-size: 24px;
          
       }
    }


`
export const LandingBtns = styled.div`

 

    @media only screen and (min-width: 1000px) {
        width: 560px;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        
    }


    @media only screen and (max-width: 1000px) {
        margin-top: 40px ;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

`


export const MainSolidBtn = styled.button `
    background-color: #655CED;
    a {
        text-decoration: none;
        color: white;
    }

    @media only screen and (min-width: 1000px) {
        width: 260px;
        height: 60px;
        border: none;
        border-radius: 60px;
        color: white;
        font-size: 24px;

    }

    @media only screen and (max-width: 1000px) {
        width: 240px;
        height: 52px;
        border: none;
        border-radius: 30px;
        color: white;
        font-size: 20px;
    }
`

export const MainOutlineBtn = styled.button `
    background-color: #655CED;
    a {
        text-decoration: none;
        color: #655CED;
    }

    @media only screen and (min-width: 1000px) {
        width: 260px;
        height: 60px;
        border: #655CED 2px solid;
        border-radius: 60px;
        background-color: transparent;
        color: #655CED;
        font-size: 24px;

    }


    @media only screen and (max-width: 1000px) {
        width: 240px;
        height: 52px;
        border: #655CED 2px solid;
        border-radius: 30px;
        background-color: transparent;
        color: #655CED;
        font-size: 20px;

    }
`

export const ProfilePic = styled.div`
      @media only screen and (max-width: 1000px){
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 24px;
        img {
              width: 300px;
          }
      }
`
export const LabelAboutMe = styled.div`

   @media only screen and (min-width: 1000px) {

        margin-top: 60px;
        text-align: center;

       h1 {
           font-size: 48px;
           color: #655CED;  
       }

       h2 {
           font-size: 32px;
       }
   } 


   @media only screen and (max-width: 1000px) {

    margin-top: 40px ;
    text-align: center ;

    h1 {
        color: #655CED;
        
    }
   }

`


export const DefContainer = styled.div`

    @media only screen and (min-width: 1000px) {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            margin-top: 24px;
            font-size: 32px;

        }
        p {
            width: 300px;
            margin-top: 16px;
            font-size: 20px;
            text-align: center;
            
        }
        
    }


    @media only screen and (max-width: 1000px){
        margin-top: 40px ;
        display: flex ;
        flex-direction: column ;
        justify-content: center ;
        align-items: center ;

        h2 {
            margin-top: 20px ;
        }

        p {
            margin-top: 10px ;
            font-size: 20px ;
            text-align: center ;
        }


    }

`

export const DefImage = styled.div`
    @media only screen and (min-width: 1000px) {
        width: 180px;
        height: 180px;
        border-radius: 90px;
        background-color: #655CED;

        display: flex;
        align-items: center;
        justify-content: center;
    }


    @media only screen and (max-width: 1000px) {
        width: 180px ;
        height: 180px ;
        border-radius: 90px ;
        background-color: #655CED ;

        display: flex ;
        align-items: center ;
        justify-content: center ;
    }
`

export const LessonDefContainer = styled.div`

    border-radius: 20px ;
    box-shadow: 0px 16px 26px 2px rgba(0,0,0,0.16);

    @media only screen and (min-width: 1000px){
        width: 400px;
        padding: 40px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        h2 {
            margin-top: 20px;
            text-align: center;
        }
        p {
            font-size: 24px;
            margin-top: 16px;
            text-align: center;
        }
        

    }   
        
        @media only screen and (max-width: 1000px) {
        margin-top: 40px ;
        display: flex ;
        flex-direction: column ;
        justify-content: center ;
        align-items: center ;
        padding: 40px ;
        h2 {
            margin-top: 20px ;
            text-align: center ;
        }
        p {
            font-size: 20px ;
            margin-top: 10px ;
            text-align: center;
        }
    }

`


export const FooterContainer = styled.div`
    background-color: #655CED;
    a {
        text-decoration: none;
        color: white;
    }
    @media only screen and (min-width: 1000px) {
        margin-top: 80px;
        padding: 40px 140px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .links {
            margin-right: 200px;
            display: flex;
            flex-direction: column;
            font-size: 28px;
            justify-content: space-evenly;
        }
        h2 {
            font-size: 40px;
        }

       
       
    }

    @media only screen and (max-width: 1000px) {
        margin-top: 80px;
        display: flex ;
        flex-direction: column ;
        align-items: center ;
        justify-content: center ;
        padding: 20px ;
        color: white;

        .links {
            margin-top: 20px ;
            font-size: 24px ;
            text-align: center;
        }

        h4 {
            margin-top: 20px ;
        }
    }
    
`