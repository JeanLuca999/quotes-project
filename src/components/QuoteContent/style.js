import styled from "styled-components";

export const Name = styled.h2`
    color: #000;
    font-size: 1.75rem;
    text-align: left;
    padding-left: 5px;
`

export const Text = styled.p`
    color: #1c1c1c;
    font-size: 1.025rem;
    margin: 15px 0;
    padding: 0 15px;
    padding-left: 20px;
    position: relative;
    text-align: left;
    font-style: italic;

    &::before {
        content: '"';
        position: absolute;
        right: 0;
        bottom: -5px;
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
export const QuoteWrapper = styled.div`
    text-align: center;
    padding: 20px;
    max-width: 300px;
    min-height: 300px;
    width: 90%;
    background-color: white;
    margin: 20px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    position: relative;
`

export const DeleteQuote = styled.button`
    display: block;
    padding: 10px 20px;
    color: white;
    background-color: #0b76dc;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    transition-duration: 0.4s;
    
    &:hover {
        background-color: #1c5082;
    }
`

export const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: 32px auto;
`