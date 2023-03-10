import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #F5F5F5;


  header{
    align-items: center;
    margin: 0 auto;
    width: 90%;
    height: 139px;
  }

  .container__header{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
    margin-left: 5%;
  }

  .container__img{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 36px;
  }

  .container__button{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-top: 10px;
    padding: 0px 10px 0px 15px;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    background: #FFFFFF;
    max-width: 382px;
  }

  input {
    width: 30%;
    min-width:45px;
    height: 19px;
    border: none;
  }

  input::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #E0E0E0;
  }

  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    width: 40%;
    min-width: 60px;
    max-width: 107px;
    height: 40px;
    background: #27AE60;
    border: 2px solid #27AE60;
    border-radius: 8px;
    color: #FFFFFF;
  }
  @media (min-width: 562px){
    header{
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      
    }

    .container__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
  }

    .container__img{
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 160px;
      

    }

    .container__button{
      
      width: 60%;
    }
}
`;

