import React, {Component} from 'react';
import PostItem from "./PostItem";
import axios from "axios";
import {Link} from "react-router-dom";

class Posts extends Component {
    constructor(props){
        super(props);


        this.state = {
            posts: [],
            // users: [],
        }
    }


    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                this.setState({posts: res.data});
            });

        //
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => {
        //         console.log(res);
        //         this.setState({users: res.data});
        //     });
    }




    render() {
        return (
            <div className='container'>

                <h5>Posts</h5>

                <div className="row">
                    {this.state.posts.map((item) => (
                        <div className="col-4">
                            <PostItem title={item.title} id={item.id}/>


                            {/*{this.state.users.map((item1) => (*/}
                            {/*    <div className="card">*/}
                            {/*        <div className="">*/}
                            {/*            <Link to={'/users/' + this.props.id}>{item.userId === item1.id ? item1.name : ''}</Link>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*))}*/}


                        </div>

                    ))}

                </div>

            </div>
        );
    }
}

export default Posts;