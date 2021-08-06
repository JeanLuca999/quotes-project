import styled from "styled-components";

export const HeaderWrapper = styled.header`
    background-color: #0b76dc;
`

export const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    text-align: center;
    color: white;
    padding: 1rem 0;
    width: 90%;
    margin: 0 auto;
`

export const Nav = styled.nav`
    padding: 0.625rem 1.25rem;
`

export const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`

export const Li = styled.li`
    font-size: 1.125rem;
    margin-right: 1.25rem;
    color: ${props => props.current ? '#1f5c96' : 'white'};
    background-color: ${props => props.current ? 'white' : 'transparent'};
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 15px;
    transition-duration: 0.4s;
    border: 1px solid white;
    margin-bottom: 10px;

    &:hover, &:focus {
        background-color: white;
        color: #1f5c96;
    }

`