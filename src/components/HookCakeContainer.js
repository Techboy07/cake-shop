import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '@/redux'

const HookCakeContainer = () => {

    const dispatch = useDispatch()

    const numOfCakes = useSelector((state) => {
        return state.cake.numOfcakes
    })



    return (
        <div>
            <h2>Num of Cakes {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())} >Buy Cake </button>
        </div>
    )
}

export default HookCakeContainer
