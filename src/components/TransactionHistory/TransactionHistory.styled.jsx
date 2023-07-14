import styled from '@emotion/styled';

export const Transactions = styled.table`
    border: 1px solid #eee;
    border-radius: 6px;
    table-layout: fixed;
    width: 100%;
    box-shadow: 0 4px 4px #d9ddde;
    font-size: 14px;
    margin-bottom: 40px;
`;

export const MainLine = styled.th`
    width: 100%;
    height: 40px;
    align-items: center;
    color: white;
    background-color: #63ddf2;
    border: 0.3px solid #dddddd;
`;

export const NotMainLine = styled.td`
    width: 100%;
    color: dimgrey;
    border: 0.3px solid #eee;
    height: 40px;
    text-align: center;
`;

export const OneLine = styled.tr`
    :nth-of-type(odd) {
        background: #fff;
    }
    :nth-of-type(even) {
        background: #F7F7F7;
    }
`;