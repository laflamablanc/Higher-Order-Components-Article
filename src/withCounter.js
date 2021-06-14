import React from 'react'

const withCounter = OriginalComponent => {
    class NewComponent extends React.Component {

       state ={
           count: 0
       }

        incrementCounter = () => {
            this.setState (prevState => {
                return { count: prevState.count + 1}
            })
        }

        render () {
            return (
                <OriginalComponent 
                    incrementCounter ={incrementCounter} 
                    count={count}
                />
            )
        }
    }
}

export default withCounter