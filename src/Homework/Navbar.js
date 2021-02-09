import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar container d-flex justify-content-start">
                    
                    <ul className="nav">
                        <li className="nav-item"><a href="#tab1" dataToggle='tab' className='nav-link text-decoration-none text-dark pr-5 active'><b>It akademiya</b></a></li>
                        <li className="nav-item "><a href="#tab2" dataToggle='tab' className='nav-link text-decoration-none text-dark pr-5'><b>Online IT akademiya</b></a></li>
                    </ul>
                    

                </div>

            </div>
        );
    }
}

export default Navbar;