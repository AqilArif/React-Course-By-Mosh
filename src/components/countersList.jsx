import React, { Component, Fragment } from 'react'
import Counter from './counter';

class CountersList extends Component {
    
    state = { 
        
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
     } 

     handleIncrement = (counter) => {

        const counters = [...this.state.counters];

        const index = counters.indexOf(counter);

        counters[index] = { ...counter }

        counters[index].value++;

        this.setState( { counters: counters } );

        // console.log('asd', this.state.counters[index]);
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
                        />
                    )}
                </div>
            </Fragment>
        );
    }
}
 
export default CountersList;