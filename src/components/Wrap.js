
import Carditem from "./Carditem";
import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Wrap extends Component {

    constructor(props) {
        super(props);


        this.state = {
            number: 0
        }


    }


    render() {


        // var number = 0;


        const increaseNumber = () => {
            // number++;

            this.setState({number: this.state.number + 1})
        };

        const decreaseNumber = () => {
            // number--;

            this.setState({number: this.state.number -1})
        };



        return (
            <div>
                <Container>
                    <Row className='mt-3'>
                        <Col md='4'>
                            <Carditem title="hello world!" description="asfsda dfdsf  fdfdsfd" color="success"/>
                        </Col>
                        <Col md='4'>
                            <Carditem title="nma gap!" description="as j ubub  ef fdfdsfd" color="primary"/>
                        </Col>
                        <Col md='4'>
                            <Carditem title="nmadir!" description="asfs b b b b b  sfd" color="danger"/>
                        </Col>


                        <Col md={{size:4, offset: 4}}>
                            <div className="card mt-3">
                                <div className="card-header">
                                    <h3 className='text-center'>{this.state.number}</h3>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <button type='button' className='btn btn-success' onClick={increaseNumber}>+</button>
                                    <button type='button' className='btn btn-danger' onClick={decreaseNumber}>-</button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Wrap;

//rcc - class component
//rsc - arrow component
//rsf - function component