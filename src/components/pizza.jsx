import React, {Component} from "react";

class Pizza extends Component{
state = {};

    render(){
        return(
                <div className="card" style={{width: "16rem"}}>
                    <img className="card-img-top" src="https://adminsc.pizzahut.lk//images/mainmenu/e3205655-8b4b-4f9c-9279-4e25c257e032.jpg" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Chicken Sausage Meat With Nai Miris</h5>
                        <p className="card-text">A fiery blend of kotchchi chicken sausage meat with nai miris, set upon an all new kotchchi sauce base topped with onion, capsicum and a double layer of mozzarella cheese.</p>
                        <button href="#" className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
        );
    }
}

export default Pizza;