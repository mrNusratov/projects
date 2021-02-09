import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class ProductPage extends Component {


    constructor(props){
        super(props);

        this.state = {
            database: []
        }
    }





    render() {



        const arrayTest = ()  => {
            var numbers = [43, 65, -23, 34, -454];
            //
            // for (var i = 0; i < numbers.length; i++){
            //     console.log(numbers[i]);
            // }

            numbers.forEach((item, i, array) => {

                console.log(i + "-element: " + item);
                console.log(array);

            });


            var newNumber = numbers.map((item, index, array) => {

                return item + "nimadir"

            });
            console.log(newNumber);

        };




        const saveProduct = (e) => {
            e.preventDefault();

            // console.log("keldi");


            var productName = e.target.productName.value;
            var productPrice = e.target.productPrice.value;
            var productColor = e.target.productColor.value;

            var newProduct = {
                name: productName,
                price: productPrice,
                color: productColor
            };

            var temp = this.state.database;
            temp.push(newProduct);

            this.setState({database: temp});


            console.log(this.state.database);

        };




        return (
            <div>

                <Container>
                    <Row>
                        <Col md={{size: 4, offset: 4}}>
                            <div className="card mt-3">
                                <div className="card-body">
                                    <form onSubmit={saveProduct}>
                                        <input type="text" className='form-control' placeholder='Product name' name='productName'/>
                                        <input type="number" className='form-control my-3' placeholder='Product price' name='productPrice'/>
                                        <input type="color" className='form-control' placeholder='Product color' name='productColor'/>

                                        <button type='submit' className='btn btn-success mt-3'>Add</button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {this.state.database.map((item) => {
                            console.log(item);
                            return(
                                <div className='col-4 mt-3'>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>{item.name}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p>Color: <b>{item.color}</b></p>
                                            <p>Price: <b>{item.price}</b></p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <button type='button' className='btn btn-primary'>edit</button>
                                            <button type='button' className='btn btn-danger'>delete</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </Row>
                </Container>



                <button type="button" className='btn btn-success' onClick={arrayTest}>Click me!</button>


            </div>
        );
    }
}

export default ProductPage;