import React, {Component} from 'react';
import axios from "axios";

class UserView extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        console.log(this.props);
        axios.get("https://jsonplaceholder.typicode.com/users/" + this.props.id)
            .then(come => {
                this.setState({user: come.data})
            })
    }


    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4 offset-4 mt-5">
                        <div className="card">
                            <div className="card-header">
                                <h5>{this.state.user.name}</h5>
                            </div>
                            <div className="card-body">
                                {this.state.user.email}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default UserView;