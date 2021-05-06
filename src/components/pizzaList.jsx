import React, {Component} from "react";
import Pizza from "./pizza"

class PizzaList extends Component{
    render(){
        return <div className="container">
            <div className="row">
                <div className="col">
                    <Pizza/>
                </div>
                <div className="col">
                    <Pizza/>
                </div>
                <div className="col">
                    <Pizza/>
                </div>
            </div>
        </div>
    }
}


export default PizzaList;