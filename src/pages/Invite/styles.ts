import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url('./background.png');
    background-size: contain;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 22px;
`

export const Frame = styled.div`
    border: solid 3px #446693;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    font-family: 'Qwigley', cursive;
    color: #446693;
    font-size: 99px;
    margin: 0;
    margin-top: 16px;
    text-align: center;

    @media (max-width: 992px){
        font-size: 76px;
    }

    @media (max-width: 560px){
        font-size: 56px;
    }
`

export const Divider = styled.img`
    width: 80%;

    @media (max-width: 992px){
        width: 95%;
    }
`

export const Subtitle = styled.p`
    font-family: 'EB Garamond', serif;
    color: #446693;
    font-size: 28px;
    text-align: center;
    width: 80%;

    a{
        font-weight: bold;
        color: #446693;
    }
`

export const DateImage = styled.img`
    width: 80%;
    max-width: 600px;

    @media (max-width: 992px){
        width: 95%;
    }
`

export const Ilustration = styled.img`
    width: 80%;
    opacity: 60%;
    max-width: 600px;
`

export const Link = styled.a`
    font-family: 'EB Garamond', serif;
    color: #446693;
    font-weight: 600;
`
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const GiftsListButton = styled.button`
    background-color: #446693;
    color: #fff;
    padding: 22px 26px;
    font-size: 32px;
    border-radius: 12px;
    box-shadow: 0 0 12px 12px rgba(0,0,0,0.25);
    border: none;
    margin: 32px auto;
    cursor: pointer;
    transition: all 0.2s;
    animation: ${floatAnimation} 2s infinite;

    @media (max-width: 400px){
        width: 95%;
        font-size: 22px;
    }

    &:hover{
        transform: scale(1.1);
        animation: none;
    }
`

export const SmallText = styled.p`
    font-family: 'EB Garamond', serif;
    color: #446693;
    font-size: 22px;
    text-align: center;
    width: 80%;
    margin-top: 0;
`
