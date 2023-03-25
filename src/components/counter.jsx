import React, { Component, Fragment } from 'react'

class Counter extends Component {
    
    state = {
        count: 0,
        // tags: ['tag1', 'tag2', 'tag3'],
    }

    // constructor() {
    //     super();

    //     this.handleIncrement = this.handleIncrement.bind(this) // this code is noisy and we need to add this binding process with every event so instead of this code we use the arrow function to avoid binding
    // }

    handleIncrement = (product) => {

        console.log('Product', product);

        // Note: we can not update the state directly in class components like => (this this.state.count + 1)
        
        this.setState( { count: this.state.count + 1 } )

        //Note: The (setState) method telling the react that state of this component is going to be changed
    }

    // renderTags() {

    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>

    //     return (
    //         <ul className='ml-3 font-bold'>
    //             {
    //                 this.state.tags.map(tag => <li key={tag}> { tag } </li>)
    //             }
    //         </ul>
    //     ) 
    // }

    render() { 

        // const {tags} = this.state

        return (
            <Fragment>
                <div className='flex m-3'>
                    <span className={this.state.count === 0 ? 'bg-yellow-500 rounded-md mr-3 p-2 text-sm text-center' : 'bg-blue-500 rounded-md mr-3 p-2 text-sm text-center text-white'}>
                        {this.formatCount()}
                    </span>

                    <button 
                        type='button' 
                        className='border border-gray-500 rounded-md px-3 bg-gray-300' 
                        onClick={() => {this.handleIncrement( product ) } }
                    >
                        Increment
                    </button>
                </div>

                {/* <div>
                    {this.state.tags.length === 0 && 'Please create a new tag!'}

                    {this.renderTags()}
                </div> */}
            
                {/* <ul className='ml-3 font-bold'>
                    {
                        tags.map(tag => <li key={tag}> { tag } </li>)
                    }
                </ul> */}
            </Fragment>
        );
    }
    
    formatCount = () => {
        const { count } = this.state // destructuring the count value

        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;