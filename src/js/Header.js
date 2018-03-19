import React, {Component} from 'react';

export default class Header extends Component {
    
    render() {
        console.log(this.props);
        return (
           <header>Compound is now at {this.props.comp} state</header>
        )
    }
}