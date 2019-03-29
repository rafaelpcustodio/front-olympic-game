import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.main`
    background:linear-gradient(rgb(255, 255, 255) 0%, rgb(228, 228, 228) 100%);
    height: 10rem;
    text-align:center;
`

const Header = () => (

    <StyledHeader>
        <div>header</div>
    </StyledHeader>

)

export default Header