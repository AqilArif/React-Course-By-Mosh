import React, { Component, Fragment } from 'react'
import Counter from './counter';

class CountersList extends Component {
    
    state = { 

        counters: [
            { id: 1, value: 40 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
     } 

     handleIncrement = (counter) => {

        // creates a new array of counters using the spread operator (...) to copy the existing counters state array 
        // from the component's state.

        const counters = [...this.state.counters];

        // the index of the counter parameter in this new array using the indexOf() method.

        const index = counters.indexOf(counter);

        // it creates a copy of the counter object at the retrieved index, 
        // using the spread operator ({...counter}), to avoid directly modifying the state

        counters[index] = { ...counter }

        // Finally, the value property of the copied counter object is incremented by one 
        // and the state is updated using the setState()

        counters[index].value++;

        // method to set the counters property to the new counters array.

        this.setState( { counters: counters } );
     }
     
     handleDecrement = (counter) => {

        const counters = [...this.state.counters];

        const index = counters.indexOf(counter);

        counters[index] = { ...counter }

        counters[index].value--;

        this.setState( { counters: counters } );
     }

     handleReset = () => {

        const resetCounters = this.state.counters.map((counter) => {
            
            counter.value = 0;
            
            return counter
            
        }); 

        this.setState({counters: resetCounters})
     }

     handleDelete = (counterId) => {

        // console.log('Handle Delete Event Clicked', counterId)

        // Delete the counters list by the specific id 

        const deleteCounters = this.state.counters.filter((counter) => counter.id !== counterId);

        this.setState( {counters: deleteCounters} );
     }

    render() { 
        return (
            <Fragment>
                <button 
                    type='button' 
                    className='rounded-md px-3 py-2 bg-blue-600 text-white m-3' 
                    onClick={this.handleReset}
                >
                    Reset Counters
                </button>

                <div>
                    {this.state.counters.map((counters) => 
                        <Counter 
                            key={counters.id} 
                            counter={counters} 
                            onDelete={this.handleDelete} 
                            onIncrement={this.handleIncrement} 
                            onDecrement={this.handleDecrement} 
                        />
                    )}
                </div>
            </Fragment>
        );
    }
}
 
export default CountersList;