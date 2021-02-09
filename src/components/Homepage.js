import React, {Component} from 'react';
import {Col, Modal, ModalBody, Container, Row, ModalFooter} from "reactstrap";

import {AvForm, AvField} from 'availity-reactstrap-validation';



class Homepage extends Component {

    constructor(props){
        super(props);

        this.state = {
            database : [],
            modalOpen: false,
            selectedIndex: -1,
        }
    }


    render() {


        const saveProduct = (e) => {
            e.preventDefault();


            var productName = e.target.productName.value ;
            var productPrice = e.target.productPrice.value ;
            var productColor = e.target.productColor.value ;


            e.target.reset();
            // formani reset qiliw ucun


            var newProduct = {
                productName: productName,
                productPrice: productPrice,
                productColor: productColor
            };

            var temp = this.state.database;
            temp.push(newProduct);

            this.setState({database: temp});

            console.log(this.state.database);

        };



        const deleteProduct = (index) => {

            this.state.database.splice(index,1);

            this.setState({database: this.state.database});

        };



        const changeModal = () => {
          this.setState({modalOpen: !this.state.modalOpen})
        };


        const editProduct = (hodisalar, xatoliklar, qiymatlar) => {

            console.log(qiymatlar);
            this.state.database.splice(this.state.selectedIndex, 1, qiymatlar);

            this.setState({database: this.state.database});
            changeModal();

        };


        const setSelectedIndex = (index) => {

            this.setState({selectedIndex: index});
            changeModal();



        };



        return (
            <div>



                <Container>
                    <Row>
                        <Col md={{size: 4, offset: 4}}>
                            <div className="card mt-3">
                                <div className="card-body">
                                    <form onSubmit={saveProduct}>
                                        <input type="text" className='form-control' required
                                               placeholder='Product name' name='productName'/>
                                        <input type="number" className='form-control my-3' required

                                               placeholder='Product price' name='productPrice'/>
                                        <input type="color" className='form-control' required

                                               placeholder='Product color' name='productColor'/>

                                        <button type='submit' className='btn btn-success mt-3'>Add</button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {this.state.database.map((item,index) => {
                            console.log(item);
                            return(
                                <div className='col-4 mt-3'>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>{item.productName}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p>Color: <b>{item.productColor}</b></p>
                                            <p>Price: <b>{item.productPrice}</b></p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <button type='submit' onClick={()=> setSelectedIndex(index)} className='btn btn-primary'>edit</button>
                                            <button type='button' onClick={() => deleteProduct(index)} className='btn btn-danger'>delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Row>
                </Container>



                <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm onSubmit={editProduct} model={this.state.database[this.state.selectedIndex]}>

                    <ModalBody>

                            <AvField type='text' label='Product name' name='productName' />
                            <AvField type='number' label='Product price' name='productPrice' />
                            <AvField type='color' label='Product color' name='productColor' />


                    </ModalBody>
                    <ModalFooter>
                        <button type='submit' className='btn btn-primary'>save</button>
                        <button type='button' onClick={changeModal} className='btn btn-secondary'>cancel</button>
                    </ModalFooter>
                    </AvForm>

                </Modal>


            </div>
        );
    }
}

export default Homepage;