import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

function Home() {
    return (
        <div style={{overflowY: 'auto'}}>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    )
}
export default Home