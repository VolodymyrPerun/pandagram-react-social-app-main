import React from 'react';
import styled from 'styled-components';
import {CaretLeftFilled} from '@ant-design/icons';

const Error = styled.div`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    width: 300px;
    height: 300px;
    text-align: center;
    padding-top: 100px;
    font-size: 32px;
    color: #e32636;
    border: 2px solid #c21500;
    margin: 0 auto;
`;

const Container = styled.div`
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color: #2B1100;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;
`;

const Button = styled.button`
    padding: 5px 0;
    width: 130px;
    height: 30px;
    background-color: #FF0000;
    color: whitesmoke;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    outline: none;
`;


function ErrorMessages({globalError}) {

    function handleClick() {
        window.location.reload();
    }

    setTimeout(() => window.location.reload(), 10000);

    return (
        <Container>
            <Error>Something went wrong! {globalError}</Error>
            <Button type="button" onClick={handleClick}><CaretLeftFilled/> Go to profile page</Button>
        </Container>

    );
}

export default ErrorMessages;
