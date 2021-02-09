import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LifeCycleMethods from "./components/LifeCycleMethods";
import ProductPage from "./components/ProductPage";
import NavigationBar from "./components/NavigationBar";
import Trello from "./components/Trello";
import Wrap from "./components/Wrap";
import Posts from "./components/Posts";
import PostView from "./components/PostView";
import UserView from "./components/UserView";
import Plugins from "./components/Plugins";
import {ToastContainer} from "react-toastify";
import Hooks from "./components/Hooks";
import Flicker from "./components/Flicker";
import Mountain from "./components/Mountain";
import Beaches from "./components/Beaches";
import {counterReducer} from "./reducers/counterReducer";
import CounterRedux from "./components/CounterRedux";

function App2(props) {
    return (
        <div>


            <BrowserRouter>

                <ToastContainer/>

                <NavigationBar/>

                <Switch>
                    <Route exact path='/' component={LifeCycleMethods}/>
                    <Route exact path='/products' component={ProductPage}/>
                    <Route exact path='/trello' component={Trello}/>
                    <Route exact path='/counter' component={Wrap}/>
                    <Route exact path='/posts' component={Posts}/>
                    <Route exact path='/posts/:id' component={PostView}/>
                    <Route exact path='/users/:id' component={UserView}/>
                    <Route exact path='/plugins' component={Plugins}/>
                    <Route exact path='/hooks' component={Hooks}/>
                    <Route exact path='/flickr' component={Flicker}/>
                    <Route exact path='/flickr/mountain' component={Mountain}/>
                    <Route exact path='/flickr/beaches' component={Beaches}/>
                    <Route exact path='/counterRedux' component={CounterRedux}/>
                </Switch>

            </BrowserRouter>



        </div>
    );
}

export default App2;