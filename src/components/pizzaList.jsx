import React, {Component} from "react";
import axios from "axios";
import Pizza from "./pizza";

class PizzaList extends Component{
    state = {
        pizza_List : [],
    };

    render(){
        return <div className="container">
            <div className="row">
                {
                    this.state.pizza_List.map((pizza) => (
                        <div key={pizza.id} className="col">
                            <Pizza key={pizza.id} pizza={pizza}/>
                        </div> 
                    ))
                }
            </div>
        </div>
    }

    async componentDidMount(){
        const {data} =  await axios.get("http://localhost:5000/api/pizzahub/products");
        let pizzas = data.map((pizza) => {
            return {
                id: pizza._id,
                imgUrl: pizza.imageUrl,
                name: pizza.name,
                price: pizza.price,
                availability: pizza.availability,
                size: pizza.size,
                ingredients: pizza.ingredients,
                details: pizza.details
            };
        });
        this.setState({pizza_List: pizzas});
    }
}


export default PizzaList;