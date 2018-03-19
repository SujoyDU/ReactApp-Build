import React, {Component} from 'react';

export default class Temperature extends Component{

    RaiseButtonClick(){
        this.props.raiseTemp();
    }
    DecreaseButtonClick(){
        this.props.decreaseTemp();
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <p>Temperature is now at {this.props.temp} Degree celcius</p>
                
                <button onClick= {this.RaiseButtonClick.bind(this)}>Raise Temperature</button>

                <button onClick= {this.DecreaseButtonClick.bind(this)}>Decrease Temperature</button>
            </div>

        )
    }


}