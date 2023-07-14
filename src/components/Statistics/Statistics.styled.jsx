import styled from '@emotion/styled';
//import { getRandomHexColor } from '../../assistants';

export const Statistic = styled.section`
    width: 100%;
    height: auto;
    padding-top: 60px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 34px;
    font-weight: 700;
    color: #414142;
`;

export const StatList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    padding-top: 28px;
    padding-bottom: 28px;
    color: white;
    background-color: #969da8;
`;

export const Label = styled.span`
    font-size: 20px;
`;

export const Percentage = styled.span`
    font-size: 28px;
`;



