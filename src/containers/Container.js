import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
`

const Container = ({ children }) => (

    <StyledContainer>
        { children }
    </StyledContainer>

)

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired
}

export default Container
