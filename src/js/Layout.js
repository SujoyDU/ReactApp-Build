import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Temperature from './Temperature';

export default class Layout extends Component {
    constructor(){
        super();
        this.compound = "water";
        this.state = {compound_type : "Liquid", temp: 25}
    }

    raiseTemp(){
        this.setState({temp: this.state.temp+1})
        if(this.state.temp> 0 && this.state.temp <100)
            this.setState({compound_type : "Liquid"})
        else if (this.state.temp > 99)
            this.setState({compound_type : "Vapor"})
    }

    decreaseTemp(){
        this.setState({temp: this.state.temp-1})
        if(this.state.temp < 1)
            this.setState({compound_type : "Ice"})
        else if(this.state.temp <100 && this.state.temp >0)
            this.setState({compound_type : "Liquid"})
    }

    // changeCompundState(){

    //     if(this.state.temp>99){
    //         this.setState({compound_type : "Vapor"})
    //     }
    //     if(this.state.temp<1){
    //         this.setState({compound_type : "Ice"})
    //     }
    // }

    render() {
        // setTimeout(()=> {
        //     this.setState({compound_type: "Vapor"})
        //     // this.compound = "vapor"
        // },1000)

        return (
            <div>
                <Header comp={this.state.compound_type}/>
                <h1>hydrogen and oxygen molucule makes {this.compound}</h1>
                <p>Compound state is {this.state.compound_type}</p>
                <Temperature decreaseTemp= {this.decreaseTemp.bind(this)} raiseTemp= {this.raiseTemp.bind(this)} temp = {this.state.temp}/>
                <Footer />
       
            </div>
        
        )
    }
}