import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends Component {
    constructor(){
        super();
        this.compound = "water";
        this.state = {compound_type : "Liquid"}
    }

    render() {
        // setTimeout(()=> {
        //     this.setState({compound_type: "Vapor"})
        //     // this.compound = "vapor"
        // },1000)

        return (
            <div>
                <Header comp={this.state.compound_type}/>
                <h1>hydrogen and oxygen molucule makes {this.compound}</h1>
                <p>Compund state is {this.state.compound_type}</p>
                <p>Heat water to 100 degree celcius</p>
                <Footer />
            </div>
        
        )
    }
}