import styled from "styled-components";

export const Container = styled.div`

width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  margin-bottom: var(--spacers);
  @media (min-width: 1368px) {
  }
  .bodyCopy {
      max-width: 300px;
      @media (min-width: 768px) {
        max-width: 531px;
      }
      @media (min-width: 1280px) {
        max-width: 625px;
      }
     
      @media (min-width: 1920px) {
        max-width: 942px;
      }
      @media (min-width: 2560px) {
        max-width: 945px;
      }
    }

  & > div:nth-of-type(1).bodyCopy {

    @media (min-width: 1368px) {
          margin-top:10px !important;
        }
    }
  //   @media (min-width: 1280px) {
  //     max-width: 46vw;
  //   }
  //   @media (min-width: 1368px) {
  //     margin-top:10px !important;
  //   }
  // } 
  // & > div:nth-of-type(4).bodyCopy {
  //   max-width: 304px;
  //   @media (min-width: 768px) {
  //     max-width: 485px;
  //   }
  //   @media (min-width: 1280px) {
  //     max-width: 52vw;
  //   }
  // } 
  // & > div:nth-of-type(6).bodyCopy {
  //   max-width: 372px;
  //   @media (min-width: 768px) {
  //     max-width: 531px;
  //   }
  //   @media (min-width: 1280px) {
  //     max-width: 44vw;
  //   }
  }


//   .bodyCopy {
//   @media screen and (min-width:680px){
//     max-width: 600px !important;
//   }

// @media screen and (min-width:1680px){

// max-width: 900px !important;
// }
// }

  img{
    // width:100%;
    // height: auto;
  
}

`


