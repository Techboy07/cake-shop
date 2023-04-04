import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '@/redux'

const HookIceCreamContainer = () => {

    const dispatch = useDispatch()

    const numOfIceCreams = useSelector((state) => {
        return state.iceCream.numOfIceCreams
    })



    return (
        <div>
            <h2>Num of Icecreams{numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())} >Buy Icecreams</button>
        </div>
    )
}

export default HookIceCreamContainer
