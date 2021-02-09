import React, {Component} from 'react';
import axios from "axios";


class LifeCycleMethods extends Component {


    constructor(props){
        super(props);
        console.log("this from contruktor");

        this.state = {
            users: [],
        }
    }

    nizom() {
        console.log("this from nizom function");

    }


    componentDidMount() {
        console.log("this from componentdidmount function");


        // GET data olish
        // Post data berish
        // PUT data ozgartirish
        // DELETE data ociriw


        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res);
                this.setState({users: res.data})
            })


    }

    componentWillUnmount() {
        console.log("this from componentwilunmount function");

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("this from componentdidupdate function");

    }


    render() {


        console.log("this from render function");



        return (
            <div>



                <div className="container">
                    <div className="row mt-3">
                        {/*{this.state.users.map((item, index) => (*/}
                        {this.state.users.map((item, index) => (
                            <div className="col-4 mb-3">
                                <div className="card">
                                    <div className="card-header">{item.name}</div>
                                    <div className="card-body">
                                        <p>City: <b>{item.address.city}</b></p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>



            </div>
        );
    }
}

export default LifeCycleMethods;