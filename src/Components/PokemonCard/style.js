import styled from "styled-components";

export const PokeCardContainer = styled.div`
    height: 210px;
    width: 440px;
    margin: 20px;
    border-radius: 10px;
    background-color: ${(props) => props.type};
    position: relative;
    color: white;
`;

export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 60%;
    margin: 25px 0 0 25px;
`;

export const ImgContainer = styled.div`
    background: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokeImg = styled.img`
    height: 193px;
    position: absolute;
    top: -50px;
    right: 0px;
`;

export const TypeImg = styled.img`
    width: 91px;
    height: 35px;
    margin: 3px;
`;

export const PokeBallImg = styled.img`
    position: absolute;
    width: 210px;
    top: 0px;
    right: 0px;
    z-index: 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;
`;

export const ButtonDetails = styled.h3`
    margin-left: 15px;
    cursor: pointer;
`;

export const ButtonCaptureRemove = styled.button`
    width: 146px;
    height: 38px;
    border-radius: 8px;
    border: none;
    background: #ffffff;
    cursor: pointer;
    margin-right: 15px;
    z-index: 1;
`;
