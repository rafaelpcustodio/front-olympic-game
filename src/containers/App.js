import React, { Fragment } from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

const App = ({children}) => {

    return(
        <Fragment>
            <Header/>
                {children}
            <Footer/>
        </Fragment>
    )

}

export default App
