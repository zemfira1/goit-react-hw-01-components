import styled from '@emotion/styled';

export const ProfileSecton = styled.div`
    width: 100%;
    height: auto;
    padding-top:50px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 300px;
    height: 300px;
    border: 1px solid;
    border-color:#e1e4e8;
    border-radius: 150px;
`;

export const Name = styled.p`
    font-size: 40px;
    font-weight: 700;
`;

export const Tag = styled.p`
    color: #808080;
    font-size: 24px;
`;

export const Location = styled.p`
    color: #808080;
    font-size: 24px;
`;

export const Stats = styled.ul`
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
    border: 0.3px solid;
    border-top: 1px solid;
    border-color: #e1e4e8;
    padding-top: 28px;
    padding-bottom: 28px;
    background-color: #f5f7fa;
`;

export const Label = styled.span`
    color: #808080;
    font-size: 20px;
`;

export const Quantity = styled.span`
    font-size: 26px;
    font-weight: 700;
`;