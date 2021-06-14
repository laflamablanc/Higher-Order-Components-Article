import React from 'react'
import withCounter from './withCounter'

const ClickCounter = ({count, incrementCount}) => {
    return (
        <button onClick ={incrementCount}>
            Click {count} times
        </button>
    )
}