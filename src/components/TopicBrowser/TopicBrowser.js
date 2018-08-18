import React, {Component} from 'react'
import EvenAndOddfrom from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
    render () {
        return (
            <div>
                <EvenAndOddfrom/>
                <FilterObject/>
                <FilterString/>
                <Palindrome/>
                <Sum/>
            </div>
        )
    }

}