import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.main`
background:linear-gradient(rgb(228, 228, 228) 0%, rgb(255, 255, 255) 100%);
    height: 10rem;
`

const Footer = () => (
    <StyledFooter>
        <div>footer</div>
    </StyledFooter>
)

export default Footer