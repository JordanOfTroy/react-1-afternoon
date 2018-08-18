import React, {Component} from 'react'

export default class EvenAndOdd extends Component{
    constructor (props) {
        super (props)
            this.state = { 
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
        
    }
    
    assignEvensAndOdds (userInput) {
        var arr=userInput.split(',')
        var evens=[]
        var odds=[]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            } else {
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    handleChange (val) {
        // let evenVals = []
        // let oddVals = []
        // for (let i = 0; i < val.length; i++) {
        //     if (val[i] % 2 === 0) {
        //         evenVals.push(val[i])
        //     } else if (val[i] % 2 !== 0) {
        //         oddVals.push(val[i])
        //     }
        // }
        // this.setState ({
        //     evenArray: evenVals,
        //     oddArray: oddVals
        // })

    }
    

    render () {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' 
                onChange={(e) => this.handleChange(e.target.value)} type="number"/>
                <button className='confirmationButton'
                onClick={() => {this.assignEvensAndOdds(this.state.userInput)}} >Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}
// 
// 