import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.monsters.map(monster => 
                    <div className="monster-box">
                        <h4>{monster.name}</h4>
                    </div>)
                }
            </div>
        )
    }
}





// https://cns-favorites-be.herokuapp.com/api/allspells
