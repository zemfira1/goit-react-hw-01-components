import styled from '@emotion/styled';

export const Item  = styled.li`
    display: flex;
    justify-content: flex-start;
    gap: 18px;
    align-items: center;
    padding: 4px 18px;
    background-color: white;
    box-shadow: -1px 1px 2px 2px #d9ddde;
    border-radius: 3px;
`;

export const Avatar = styled.img`
    border: 1px solid;
    border-color: #e1e4e8;
    border-radius: 10px;
`;

export const Name = styled.p`
    font-size: 36px;
    font-weight: 500;
`;