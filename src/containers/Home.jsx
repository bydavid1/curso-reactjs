import React from 'react'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState'

const API = "http://localhost:3000/initalState"

const Home = () => {
    const [videos, categories] = useInitialState(API)
    return(
        <React.Fragment>
            <Search/>
            {categories.map((category) => (
                videos[category].length > 0 && (
                    <Categories key={category} title={category}>
                        <Carousel>
                            {videos[category].map(item => (
                                <CarouselItem key={item.id} {...item} />
                            ))}
                        </Carousel>
                    </Categories>
                )))}
        </React.Fragment>
    )
}

export default Home
