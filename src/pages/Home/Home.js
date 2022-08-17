import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiLightBackpack } from 'react-icons/gi'
import { SiHandshake } from 'react-icons/si'

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

const Hero = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: url('https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    background-position: center;

    .hero-heading {
        font-size: 2rem;
        text-align: left;
        color: #EDFFD9;
        font-weight: 700;
    }

    .hero-action {

        a {
            text-decoration: none;
            color: #EDFFD9;
        }

        width: 100%;
        margin-top: 4rem;

        &__button {
            border: none;
            padding: 1.3rem;
            background: #DC965A;
            border-radius: 1rem;
        }
    }

    @media(min-width: 600px) {
        background-repeat: no-repeat;
        background: black;
        height: 80vh;
        display: flex;
        align-items: flex-start;

        .hero-heading {
            text-align: left;
        }
    }
`

const Services = styled.section`
    padding: 2rem;

    .service-student {
        padding: 1rem;
        border-radius: 1rem;
        margin: 2rem 0;
        box-shadow: 2px 4px 5px grey;
        font-weight: 400;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__icon {
            font-size: 4rem;
            color: darkblue;
        }
    }

    .service-ycm {
        padding: 1rem;
        border-radius: 1rem;
        margin: 2rem 0;
        box-shadow: 2px 4px 5px grey;
        font-weight: 400;
        font-size: 0.8rem;
    }

    .service-other {
        padding: 1rem;
        border-radius: 1rem;
        margin: 2rem 0;
        box-shadow: 2px 4px 5px grey;
        font-weight: 400;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__icon {
            font-size: 4rem;
            color: darkblue;
        }
    }
`

const ExploreSection = styled.section`
    h2 {
        padding: 0 2rem;
    }
`

export default Home