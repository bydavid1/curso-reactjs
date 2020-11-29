import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState'

//const API = "http://localhost:3000/initalState"

const Home = ({ lists }) => {
    return(
        <React.Fragment>
            <Search/>
            {Object.keys(lists).map(category => (
                lists[category].length > 0 && (
                    <Categories key={category} title={category}>
                        <Carousel>
                            {lists[category].map(item => (
                                <CarouselItem key={item.id} {...item} />
                            ))}
                        </Carousel>
                    </Categories>
                )))}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        lists : state.lists
    }
}

export default connect(mapStateToProps, null)(Home)
