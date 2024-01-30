import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 20vh;
    min-height: 160px;
    max-height: 300px;
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    position: relative;
`;

export const LeftHeaderButton = styled.h2`
    position: absolute;
    left: 10px;
    cursor: pointer;
`;

export const RigthHeaderButton = styled.button`
    position: absolute;
    right: 10px;
    width: 287px;
    height: 74px;
    background-color: ${props => props.red ? "#FF6262;" : "#33A4F5;"};
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 26px;
`;

export const LogoImg = styled.img`
    width: 307px;
`;