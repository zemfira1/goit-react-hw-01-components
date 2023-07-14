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

//  export const Status = styled.span`
//     width: 20px;
//     height: 20px;
//     border-radius: 10px;
//     background-color:rgb(233, 236, 188);

//     background-color: ${props=> {
//         switch (props.isOnline) {
//         case 'true':
//             return '#2de327';
//         case 'false':
//            return '#e33327';
//         default:
//             return 'rgb(233, 236, 188)';
//         }
//     }}
    
// `;

export const Avatar = styled.img`
    border: 1px solid;
    border-color: #e1e4e8;
    border-radius: 10px;
`;

export const Name = styled.p`
    font-size: 36px;
    font-weight: 500;
`;