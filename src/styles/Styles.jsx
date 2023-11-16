import styled from "styled-components";

export const Title = styled.h1`
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 900px){
  height: 110px;
}
`

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
align-content:center;
width: 100vw;
height: 60vh;
justify-content:center;
@media only screen and (max-width: 900px){
  width: auto;
  height: auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  align-content:center;

}
`

export const FormGroup = styled.form`
  display:flex;
  align-content: space-between;
  justify-content:center;
  flex-direction: row;
  align-items: center;
  border: 1px dotted #fefefe;
  padding: 20px;
  width: 80%;
  height: 63%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media only screen and (max-width: 900px){
  display: flex;
  flex-direction:column;
  }

`

export const Formcontrol = styled.input`
/* display:flex;
flex-direction:column;
align-items:center;
align-content:center;
padding-bottom: 10px;
border-radius: 5px; */
  width: 87%;
    padding: 10px;
    border-radius: 10px;
    background-color:#414654;
    color:#fefefe;
    outline:none;
    &:focus{
        outline:solid #fefefe 2px;

    }
    &::-webkit-inner-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    } 
    &::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  width: 34%;
  label{
    padding-bottom: 21px;
    /* margin-top: 9px; */
    border: none;
    display:flex;
    font-size:20px;
  }
  small{
    font-size: 10px;
}
`

export const Button = styled.button`
  width: 200px;
  height: 50px;
  appearance: none;
  background-color: #212b46;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  /* box-shadow: rgba(27, 31, 35, .1) 0 1px 0; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  transition: .3s;
  &:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}
&:hover {
  background-color: #121725;
}
&:focus {
  box-shadow: rgba(181, 201, 187, 0.4) 0 0 0 3px;
  outline: none;
}
&:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}
&:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
`

export const ContainerButton = styled.div`
width: 18%;

`

export const ShowResults = styled.div`
  background-color: #b9b9b95e;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 70%;
  color: #FEFEFE;
  padding: 30px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ContainerResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

export const CurrencyDiv = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 9px;
`