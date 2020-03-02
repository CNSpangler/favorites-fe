import React, { Component } from 'react'
import List from './List';
import request from 'superagent';

export default class Search extends Component {
    state = { 
        monsters: [],
        input: '',
    }

    componentDidMount = async () => {
        const monstersData = await request.get('https://cns-favorites-be.herokuapp.com/api/allmonsters');
        console.log('monstersData.body.results:', monstersData.body.results)
        this.setState({
            monsters: monstersData.body.results
        });
    }
    
    handleSearch = async (e) => {
        e.preventDefault();
        const searchData = await request.get(`https://cns-favorites-be.herokuapp.com/api/?search=${this.state.input}
        `)

        console.log('searchData.body.results:', searchData.body.results)
        this.setState({
            monsters: searchData.body.results
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                    {console.log('this.state.monsters:', this.state.monsters)}
                    <button onClick={this.handleSearch}>Search!</button>
                    <List monsters={this.state.monsters} />
                </form>
            </div>
        )
    }
}





// http://www.dnd5eapi.co/api/spells/?name=${this.state.input}