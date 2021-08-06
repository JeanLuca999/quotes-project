import { 
    HeaderWrapper,
    Title,
    Nav,
    Ul,
    Li
 } from "./style";

import { Link } from 'react-router-dom'
import { useState } from "react";

function Header({toHome, toFavorites}) {
    const [currentLink, setCurrentLink] = useState(true)

    function handleCurrentLink() {
        setCurrentLink(!currentLink)
    }
    return (
        <HeaderWrapper>
            <Title>My Favorite Quote</Title>
            <Nav>
                <Ul>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Li current={toHome} onClick={handleCurrentLink}>Get your random quote</Li>
                    </Link>

                    <Link to="/favorites" style={{textDecoration: 'none'}}>
                        <Li current={toFavorites} onClick={handleCurrentLink}>See my favorites quotes</Li>
                    </Link>

                </Ul>
            </Nav>
        </HeaderWrapper>
    )
}


export default Header