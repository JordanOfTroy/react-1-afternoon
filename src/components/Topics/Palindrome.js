import React, {Component} from 'react'
export default class Palindrome extends Component {
    constructor (props) {
        super (props)
            this.state={
                userInput: '',
                palindrome: '',
            }
    }


    render(){
        return (
            <div className='puzzleBox filterStringsPB'>
                <h4>Palindrome</h4>
                <input onChange={(e) => this.handleChange(e.target.value)} className='inputLine' type="text"/>
                <button onClick={() => this.isPalindrome(this.state.userInput)} className='confirmationButton'>Do. The. Thing!</button>
                <span className='resultsBox'></span>
            </div>
        )
    }
}