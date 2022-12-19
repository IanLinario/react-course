import React from 'react'
import { defaultTheme } from './styles/stitches.config'
import { globalStyles } from './styles/GlobalStyles'
import Layout from './components/Layout'

const App: React.FC = () => {
    return (
        <div className={defaultTheme}>
            {globalStyles()}
            <Layout />
        </div>
    )
}

export default App