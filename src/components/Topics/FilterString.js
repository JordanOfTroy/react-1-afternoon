import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor (props) {
        super (props) 
            this.state={
                unFilteredArray: [
                    'Help', 'me', 'Obi-Wan', 'Kenobi', 'You\'re', 'my', 'only','hope'
                ],
                userInput: '',
                filteredArray: [],

            }

    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Name: {JSON.stringify(this.state.names, null, 10)}</span>
                <input onChange={(e) => this.handleChange(e.target.value)} className='inputLine' type="text"/>
                <button onClick={ () => this.filteredNames(this.state.userInput)} className='confirmationButton'>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
    
}