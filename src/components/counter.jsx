import React, { Component, Fragment } from 'react'

class Counter extends Component {
    
    state = {
        count: 1,
    }

    render() { 
        return (
            <Fragment>
                <h1 className='text-red-500'>{this.formatCount()}</h1>
                <button>Increment</button>
            </Fragment>
        );
    }

    formatCount = () => {
        const { count } = this.state // destructuring the count value

        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;