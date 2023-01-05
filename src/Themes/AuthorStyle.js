import { styled } from '@mui/system';
import { Box, Button, Container,Typography } from '@mui/material';
import background1 from '../Assets/Images/Authors/bg1.png';
import background2 from '../Assets/Images/Authors/bg2.png';
import background3 from '../Assets/Images/Authors/bg3.png';
import background4 from '../Assets/Images/Authors/bg4.png';
import background5 from '../Assets/Images/Authors/bg5.png';
import background6 from '../Assets/Images/Authors/bg6.png';
import background7 from '../Assets/Images/Authors/bg7.png';
import background8 from '../Assets/Images/Authors/bg8.png';
import background9 from '../Assets/Images/Authors/bg9.png';
import background10 from '../Assets/Images/Authors/bg10.png';
import FONT from '../Themes/Font';

export const Author_1 = styled(Box)`
height: 200px;
width: 150px;
padding: 10px 10px 0px 11px;
margin: 10px auto;
background:  ${`url(${background1}) center no-repeat`};
background-size: contain;
@media (max-width: 550px)  {
  // padding: 4rem 0;
  // height: auto !important;
  height: 250px;
  width: 100%;
}
 
  @media (max-width: 320px)  {
    // padding: 4rem 0;
    // height: auto !important;
    height: 175px;
    width: 100%;
  }
`;

export const Author_2 = styled(Box)`
height: 180px;
width: 150px;
margin: 0px auto;
background:  ${`url(${background2}) center no-repeat`};

background-size: contain;
padding: 15px 10px 0px 11px;

@media (max-width: 550px)  {
  height: 220px;
width: 100%;
  // padding: 4rem 0;
  // height: auto !important;
  margin:0
}
  @media (max-width: 320px)  {
    height: 165px;
width: 100%;
    // padding: 4rem 0;
    // height: auto !important;
    margin:0
  }
`;
export const Author_3 = styled(Box)`
height: 200px;
width: 150px;
margin: 0px auto;
background:  ${`url(${background3}) center no-repeat`};
background-size: contain;
padding:15px 10px 0px 11px;
    @media (max-width: 550px)  {
      padding:10px;
      height: 245px;
      width: 100%;
      
    }
 
  @media (max-width: 320px)  {
    padding:10px;
    height: 180px;
    width: 100%;
    
  }
`;
export const Author_4 = styled(Box)`
height: 250px;
    width: 200px;
    margin: 0px auto;
    background:  ${`url(${background4}) center no-repeat`};

    background-size: contain;
    padding:
        17px 10px 0px 15px;
    // my: 1;
    margin-right: -10px;
    margin-left: -1.5rem;
    @media (max-width: 550px)  {
      height: 215px;
      width: 100%;
      margin-right: 0px;
      margin-left: 0.1rem;
      margin-top:10px;
      padding:15px
    }
  @media (max-width: 320px)  {
    height: 185px;
    width: 100%;
    margin-right: 0px;
    margin-left: 0.1rem;
    margin-top:10px;
    padding:15px
  }
`;
export const Author_5 = styled(Box)`
height: 230px;
width: 200px;
margin: 0px auto;
background:  ${`url(${background5}) center no-repeat`};

background-size: contain;
padding:
    20px 10px 0px 15px;

margin-right: 1.8rem;
margin-left: -1.4rem;
@media (max-width: 550px)  {
  height: 236px;
width: 105%;
margin-right: 0rem;
margin-left: 0rem;
padding:25px 5px 5px 5px;
}
  @media (max-width: 320px)  {
    height: 201px;
width: 111%;
margin-right: 0rem;
margin-left: -1rem;
padding:25px 5px 5px 5px;
  }
`;
export const Author_6 = styled(Box)`
height: 220px;
width: 208px;
margin: 0px auto;
background:  ${`url(${background6}) center no-repeat`};
background-size: contain;
padding:
    14px 10px 0px 10px;
margin-right: -0rem;
margin-left: -1rem;
@media (max-width: 550px)  {
  height: 220px;
  width: 100%;
  padding:20px 10px 0px 10px;
margin-right: 0rem;
margin-left: -0rem;
}
  @media (max-width: 320px)  {
    height: 190px;
    width: 111%;
    padding:20px 10px 0px 10px;
margin-right: 0rem;
margin-left: -0.5rem;
  }
`;
export const Author_7 = styled(Box)`
height: 235px;
width: 250px;
margin: 0rem auto;
background:  ${`url(${background7}) center no-repeat`};
background-size: contain;
padding:20px 10px 0px 11px;
margin-right: -30px;
margin-left: 2rem;

@media (max-width: 550px)  {
  height: 185px;
  width: 100%;
  padding:20px 10px 0px 11px;
margin-right: 0px;
margin-left: 0rem;
}
 
  @media (max-width: 320px)  {
    height: 165px;
    width: 120%;
    padding:20px 10px 0px 11px;
margin-right: 0px;
margin-left: -0.5rem;
  }
`;
export const Author_8 = styled(Box)`
height: 250px;
width: 220px;
margin: 0px auto;
background:  ${`url(${background8}) center no-repeat`};
background-size: contain;
padding:1.5rem 10px 0px 1rem;
margin-left: 2rem;
// marginTop: '-8rem';
margin-right: -10px;
@media (max-width: 550px)  {
  height: 220px;
  width: 100%;
  padding:10px;
margin-left: 0.2rem;
// marginTop: '-8rem';
margin-right: 0px;
}
 
  @media (max-width: 320px)  {
    height: 150px;
    width: 100%;
    padding:10px;
margin-left: 0.2rem;
// marginTop: '-8rem';
margin-right: 0px;
  }
`;
export const Author_9 = styled(Box)`
height: 210px;
width: 250px;
margin: 10px auto;
background:  ${`url(${background9}) center no-repeat`};
background-size: contain;
padding:1rem 1rem 20px 1rem;
margin-right: -30px;
margin-left: 2rem;
// marginTop: '-8rem';
@media (max-width: 550px)  {
  height: 170px;
  width: 100%;
  padding:10px;
margin-right: 0px;
margin-left: 0rem;
}
  @media (max-width: 320px)  {
    height: 127px;
    width: 110%;
    padding:10px;
margin-right: 0px;
margin-left: 0rem;
  }
`;
export const Author_10 = styled(Box)`
height: 250px;
width: 200px;
margin: 30px auto;
background:  ${`url(${background10}) center no-repeat`};

background-size: contain;
padding:20px 20px 0px 20px;
margin-left: 6rem;
margin-top: 1rem;
@media (max-width: 550px)  {
  height: 220px;
  width: 90%;
  padding:10px;
margin-left: 0rem;
margin-top: 1rem;
}
  @media (max-width: 320px)  {
    height: 178px;
    width: 90%;
    padding:10px;
margin-left: 0rem;
margin-top: 1rem;
  }
`;
