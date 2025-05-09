import React from 'react'
import styled from 'styled-components'


const StartGame = () => {
  return (
  <Container>
    <div>
    <img src="images/dices.png" />
    </div>
    <div className="content">
      <h1>
        Dice Game
      </h1>
      <Button>Play Now</Button>
    </div>
  </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }
  
  `;

const Button = styled.button`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 10px 18px;
   gap: 10px;
   color: white;
   width: 220px;
   height: 44px;

   background: #000000;
   border-radius: 5px;
   min-width: 220px;
    border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.5s background ease-in;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }



`;
