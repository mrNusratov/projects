import React, {Component} from 'react';
import axios from "axios";

import './methods.css'


class HomeMethods extends Component {

    constructor(props){
        super(props);

        this.state = {
            photos: [],
        }
    }


    componentDidMount() {

        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                console.log(res);
                this.setState({photos: res.data})
            })
    }


    render() {
        return (
            <div>

                <div className="container">
                    <div className="row mt-3">

                        {this.state.photos.map((item,index) => (

                            <div className="col-4 mb-3">
                                <div className="card">
                                    <div className="card-header">{item.title}</div>
                                    <div className="card-img-bottom">
                                        <img src={item.url} className='w-100' alt=""/>
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

export default HomeMethods;