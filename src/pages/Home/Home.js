import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Navigation from '../../components/Navigation'
import Explore from '../../components/home/Explore'
import Footer from '../../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navigation />
        <header className='hero flex flex-col justify-center items-center drop-shadow-xl rounded-lg mx-4 px-6 mb-6'>
            <h1 className='hero-heading text-3xl text-center font-extrabold text-white'>A Better and Faster Way to Find Accommodation</h1>
            <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iusto et nulla illum harum omnis placeat numquam ullam quidem alias?</p>

            <div className='bg-white w-full mt-24 opacity-90 rounded-md'>
                <form action="" className='p-8'>
                    <input type="text" placeholder='Search locations' className='border-none mb-4 focus:outline-none focus:border-b-2 border-green-500' />
                    <button type="submit" className='p-2 border-solid border-2 bg-opacity-100 border-green-500 rounded-md bg-green-500 w-full'>Search</button>
                </form>
            </div>
        </header>

        <section className='px-4 mb-6'>
            <h2 className='text-2xl mb-5'>Fast. Convenient. Transparent.</h2>
            <div className='rounded-lg mb-4'>
                <img src="https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Mission" className='object-contain rounded-lg' />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur cumque earum quasi reiciendis explicabo aspernatur expedita tempore soluta accusamus ipsam.</p>
            <button className='border-2 border-green-500 rounded-md w-32 p-2 my-4 bg-green-500 text-white'>Learn more</button>
        </section>

        <section>
            <h2>How it works</h2>
        </section>

        <section className='px-6'>
            <h2>Explore property</h2>
            <Explore />
        </section>
        

        <ExploreSection>
            <h2>Explore</h2>
        </ExploreSection>

        <section>
            <p>Get Started</p>
            <p>Start Listing Property</p>
        </section>

        <Footer />
    </div>
  )
}


const ExploreSection = styled.section`
    h2 {
        padding: 0 2rem;
    }
`

export default Home