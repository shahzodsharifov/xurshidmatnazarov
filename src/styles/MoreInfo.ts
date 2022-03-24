import styled from "styled-components";

export const MoreInfoContainer = styled.div`

@media only screen and (min-width: 1000px) {
    padding: 10px 140px;

    .theMoreText {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
    }

    h2 {   
           width : 800px ;
           font-size: 60px;
           text-align: center;
           justify-content: center;
           align-self: center;
       }
}

@media only screen and (max-width: 1000px) {
    padding: 0px 20px;
    .theMoreText {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;

    }

    h2 { 
           font-size: 36px;
           text-align: center;
           justify-content: center;
           align-self: center;
       }
}


`


export const TheInfo = styled.div`

    a {
        text-decoration: none;
        list-style: none;
        color: black  }

    @media only screen and (min-width: 1000px) {
        background-color: #655CED;
        margin-top: 20px;
        width: 100%;
        height: 60vh;

        .tgAddress {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
    }

        h2 {   
           margin-top : 20px ;
           width : 650px ;
           font-size: 54px;
           text-align: center;
           justify-content: center;
           align-self: center;
           color : white ;
       }

       
      
    }

    @media only screen and (max-width: 1000px) {
        padding: 0px 20px;

        background-color: #655CED;
        margin-top: 20px;
        width: 100%;
        height: 60vh;

        .tgAddress {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
    }

        h2 {
            width: 600px;
           margin-top : 20px ;
           font-size: 36px;
           text-align: center;
           justify-content: center;
           align-self: center;
           color : white ;
       }

    }

`

