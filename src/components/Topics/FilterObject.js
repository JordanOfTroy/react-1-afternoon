import React, {Component} from 'react'

export default class FilterObect extends Component {
    constructor () {
        super ()
        this.state = {
            unFilteredArray: [
                {
                    name: 'Bobby Singer',
                    age: 55,
                    catchPhrase: 'Idjit'
                },
                {
                    name: 'Dean Winchester',
                    age: 39,
                    catchPhrase: "B***h"
                },
                {
                    name: 'Sam Winchester',
                    age: 35,
                    catchPhrase: 'Jerk'
                },
                {
                   name: 'Castiel',
                   age: null,
                   catchPhrase: 'A**-butt' 
                },
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange (val) {
        this.setState({
            userInput: val
        })
    }

    handleClick (prop) {

    }

    render () {
        return (
            <div className='puzzleBox filterObjectPB'> 
               <h4>Filter Object</h4>
                <span className='puzzleText'>unFilteredArray</span>
                <input 
                onChange={(e) => this.handleChange(e.target.value)} 
                className='inputLine' type="text"/>
                <button 
                onClick={() => this.handleClick(this.state.userInput)}
                className='confirmationButton'>Filter</button>
                <span className='resultBox filterObjectRB'>filteredArray</span>
            </div>
        )
    }
}