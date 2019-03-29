import React from 'react'

import Container from '@containers/Container'
import App from '@containers/App'
import OlympicBody from '@features/olympic/components/OlympicBody'

const OlympicList = () => {

    return(

        <App>
            <Container>
                <OlympicBody/>
            </Container>
        </App>

    )

}

export default OlympicList
