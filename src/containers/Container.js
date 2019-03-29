import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
    background: #fbfbfb;
    height: 70rem;
`

const Container = ({ children }) => (

    <StyledContainer>
        { children }
    </StyledContainer>

)

export default Container
