import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class PostItem extends Component {
    constructor(props){
        super(props);
        this.state = {

            users: [],
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res);
                this.setState({users: res.data});
            });
    }


    render() {
        return (

                <div className='card mt-3'>
                    <div className="card-body">
                        <h6>{this.props.title} <Link to={'/posts/' + this.props.id }>more...</Link></h6>
                    </div>
                    <div className="card-footer">
                        <Link>{this.props.userId == this.props.id ? this.props.name : ''}</Link>
                    </div>


                </div>

        );
    }
}

export default PostItem;