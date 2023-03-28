import React, { Component, Fragment } from 'react'

class Counter extends Component {
    
    // state = {
        
    //     // Instead of writing value of count hardcode we can set the value of count dynamically with props
        
    //     count: this.props.counter.value,

    //     // count: 0,
    
    // }

    // constructor() {
    //     super();

    //     this.handleIncrement = this.handleIncrement.bind(this) // this code is noisy and we need to add this binding process with every event so instead of this code we use the arrow function to avoid binding
    // }

    // handleIncrement = (product) => {

    //     console.log('Product', product);

    //     // Note: we can not update the state directly in class components like => (this this.state.count + 1)
        
    //     this.setState( { count: this.state.count + 1 } )

    //     //Note: The (setState) method telling the react that state of this component is going to be changed
    // }

    render() { 

        // console.log('props', this.props)

        return (
            <Fragment>
                <div className='flex m-3'>
                    <span className={this.props.counter.value === 0 ? 'bg-yellow-500 rounded-md mr-3 p-2 text-sm text-center' : 'bg-blue-500 rounded-md mr-3 p-2 text-sm text-center text-white'}>
                        {this.formatCount()}
                    </span>

                    <button 
                        type='button' 
                        className='border border-gray-500 rounded-md px-3 bg-gray-300' 
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        // onClick={() => {this.handleIncrement()}}
                    >
                        Increment
                    </button>
                    
                    <button 
                        type='button' 
                        className='rounded-md px-3 bg-red-500 text-white ml-3' 
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                    >
                        Delete
                    </button>
                </div>
            </Fragment>
        );
    }
    
    formatCount = () => {

        const { value } = this.props.counter // recieving the count value from parent component => (CountersList)

        // const { count } = this.state // destructuring the count value

        return value === 0 ? <h1> Zero </h1> : value;
    }
}
 
export default Counter;