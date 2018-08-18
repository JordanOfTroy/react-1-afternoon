import React, {Component} from 'react'
export default class Sum extends Component {
    constructor (props) {
        super (props)
            this.state={
                number1: 0,
                number2: 0,
                sum: null,
            }
    }


    render () {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input onChange={(e) => this.updateNumber1(e.target.value)} className='inputLine' type="text"/>
                <input onChange={(e) => this.updateNumber2(e.target.value)} className='inputLine' type="text"/>
                <button onClick={() => this.add(this.state.number1, this.state.number2)} className='confirmationButton' >Add</button>
                <span className='resultsBox'></span>
            </div>
        )
    }
}