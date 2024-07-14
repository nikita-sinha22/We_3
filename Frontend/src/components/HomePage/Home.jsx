import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from '../Footer'

function Home() {
    return (
        <div style={{overflowY: 'auto'}}>
            <Navbar/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default Home