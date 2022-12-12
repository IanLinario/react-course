import React from 'react'
import Aside from '../Aside'
import Content from '../Content'
import MainHeader from '../MainHeader'
import { StyleContainer } from './styles'

const Layout: React.FC = () => {
    return (
        <StyleContainer>
            <MainHeader/>
            <Aside/>
            <Content/>
        </StyleContainer>
    )
}

export default Layout