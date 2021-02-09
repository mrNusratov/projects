import Container from "reactstrap/es/Container";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Example from "./Example";

const Card = () => {
    return (
        <div className="orange">
            <Container className="navbar d-flex align-items-center justify-content-start">

                <div className="">
                    <img src="images/logo.PNG" alt="logo"/>
                </div>

                <div className="input-group w-25 mr-5 ml-4">
                    <input type="text" className="form-control border-0 shadow-none" placeholder="search..."/>

                    <div className="input-group-append">
                        <button type="button" className='btn btn-light shadow-none'>
                            <img src="images/search.png" style={{
                                width: "15px",
                                height: "15px",
                            }} alt="search"/>
                        </button>
                    </div>
                </div>


                <div className="icon ml-5">
                    <a href="#" className='d-flex justify-content-center'>
                        <img className='' src="images/home.svg" alt=""/>
                    </a>
                    <a href="#" className='text-decoration-none text-white'><p className='mb-0'>Home</p></a>

                </div>



                <div className="icon ml-4">
                    <a href="#" className='d-flex justify-content-center'>
                        <img className='' src="images/companies.svg" alt=""/>
                    </a>
                    <a href="#" className='text-decoration-none text-white'><p className='mb-0'>Companies</p></a>

                </div>




                <div className="icon ml-4">
                    <a href="#" className='d-flex justify-content-center'>
                        <img className='' src="images/puzzle-piece.svg" alt=""/>
                    </a>
                    <a href="#" className='text-decoration-none text-white'><p className='mb-0'>Projects</p></a>

                </div>






                <div className="icon ml-4">
                    <a href="#" className='d-flex justify-content-center'>
                        <img className='' src="images/users.svg" alt=""/>
                    </a>
                    <a href="#" className='text-decoration-none text-white'><p className='mb-0'>Profiles</p></a>

                </div>





                <div className="icon ml-4">
                    <a href="#" className='d-flex justify-content-center'>
                        <img className='' src="images/suitcase.svg" alt=""/>
                    </a>
                    <a href="#" className='text-decoration-none text-white'><p className='mb-0'>Jobs</p></a>

                </div>






                <div className="icon ml-4">
                    <a href="#" className='d-flex justify-content-center'>
                        <img className='' src="images/email.svg" alt=""/>
                    </a>
                    <a href="#" className='text-decoration-none text-white'><p className='mb-0'>Massages</p></a>

                </div>





                <div className="icon ml-4">
                    <a href="#" className='d-flex justify-content-center'>
                        <img className='' src="images/notification.svg" alt=""/>
                    </a>
                    <a href="#" className='text-decoration-none text-white'><p className='mb-0'>Notification</p></a>

                </div>

                <div className="ml-auto">
                    <Example/>
                </div>



                {/*
                <div className="ml-auto navbar-right d-flex align-items-center">
                    <img src="images/OvalCopy17.png" alt=""/>

                        <div className="dropdown">
                            <button type="button" className="btn mb-1 shadow-none border-0" data-toggle="dropdown">
                                <span className="text-white ml-1">John
                                    <img src="images/Path.png" className="ml-1" alt=""/>
                                    </span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#">tom</a></li>
                                <li><a href="#">jack</a></li>
                            </ul>
                        </div>
                </div>
*/}


            </Container>
        </div>

    )
};
//arrow function

export default Card;