import styled from "styled-components";


export const VideosContainer = styled.div`

    @media only screen and (min-width: 1000px) {
        padding: 20px 80px;
        .first-video {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
        }


    }

    
    @media only screen and (max-width: 1000px) {
        padding: 0px 32px;

        h2 {
            margin-top: 20px;
            color: black;
        }



        .first-video{

            iframe {
            margin-top: 20px;
            width: 100%;
            height: 180px;
            border-radius: 20px;
            }

            h4 {
                margin-top: 10px;
                font-size: 20px;
            }
          
        }

        

    
    }
`




export const AdVideoContainer = styled.div`


   @media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 500px;
    background-color: #655CED;
    padding: 20px 80px;

    .vid1 {
        margin-top: 20px;
    }

    .vid1 h2 {
        display: none;
    }

    iframe {
        margin-top: 40px;
        width: 600px;
        height: 360px;
        border-radius: 20px;
    }

    .adInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h2 {
        width: 650px;
        font-size: 48px;
        color: white;

    }

    .adCredits {
        display: flex;
        margin-top: 40px;
        justify-content: space-between;

        p {
            font-size: 24px;
            color: #181F36;
        }
    }
   }

   
   
   @media only screen and (max-width: 1000px) {
    background-color: #655CED;
    width: 100%;
    height: 400px;
    padding: 20px;

    .adInfo {
        display: none;
    }

  
    iframe {
        margin-top: 20px;
        width: 100%;
        height: 260px;
        border-radius: 20px;
    }

   }

`