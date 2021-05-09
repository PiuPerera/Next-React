import React, {Component} from "react";

class Pizza extends Component{
    state = {};

    render(){
        return(
                <div className="card" style={{width: "16rem"}}>
                    <img className="card-img-top" src={this.props.pizza.imgUrl} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.pizza.name}</h5>
                        <p className="card-text">{this.props.pizza.details}</p>
                        <ul>{this.props.pizza.ingredients.map((pizza, index) => <li key={index}>{pizza}</li>)}</ul>
                        <h5 style={{color:"red"}}>Rs.{this.props.pizza.price}/=</h5>
                        <button href="#" className="btn btn-primary">View More</button>
                    </div>
                </div>
        );
    }
}

export default Pizza;