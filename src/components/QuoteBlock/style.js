import styled from "styled-components";

export const QuoteContainer = styled.div`
    max-width: 500px;
    width: 90%;
    margin: 3rem auto;
    padding: 2rem;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
`

export const QuoteAutor = styled.h2`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 10px;
`

export const QuoteText = styled.p`
    padding: 10px 15px;
    position: relative;
    font-size: 1.025rem;
    font-style: italic;
    text-align: left;
    padding-left: 20px;
    margin-bottom: 30px;
    color: #1c1c1c;
   
    &::before {
        content: '"';
        position: absolute;
        right: 0;
        bottom: 0px;
        font-size: 25px;
        color: #0b76dc;
    }

    &::after {
        content: '"';
        position: absolute;
        top: 0;
        left: 0;
        font-size: 25px;
        color: #0b76dc;
    }
`


export const SaveQuote = styled.button`
    display: block;
    font-size: 1rem;
    padding: 10px 20px;
    border: 1px solid #0b76dc;
    background-color: #0b76dc;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition-duration: 0.4s;
    margin-right: 10px;
    &:hover {
        background-color: #1c5082;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
    }
`

export const ButtonNewQuote = styled(SaveQuote)`
    color: #0b76dc;
    background-color: transparent;

    &:hover {
        background-color: transparent;
    }
`


export const WrapperButton = styled.div`
    display: flex;

`