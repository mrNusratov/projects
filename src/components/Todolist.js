import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";




class Todolist extends Component {

    constructor(props){
        super(props);

        this.state = {
            todolist : [],
            donelist : [],
        }
    }


    render() {


        const saveWork = (e) => {
            e.preventDefault();

            var todoWork = e.target.todoWork.value ;

            e.target.reset();

            var newWork = {
                todoWork: todoWork,

            };

            var temp = this.state.todolist;
            temp.push(newWork);

            this.setState({todolist: temp});
            console.log(this.state.todolist);

        };



        const removePlus = (index) => {

            this.state.donelist.push(this.state.todolist[index]);
            this.state.todolist.splice(index,1);

            this.setState({todolist: this.state.todolist});
            this.setState({donelist: this.state.donelist});

            calc();


        };

        const deleteWork = (index) => {


            this.state.donelist.splice(index,1);
            this.setState({donelist: this.state.donelist});

            calc();
        };


        const calc = () => {
            var percent = this.state.donelist.length/ (this.state.donelist.length + this.state.todolist.length) * 100;

            document.getElementById('prog').style.width = percent + "%";
        };





        //
        // function calc() {
        //     var percent = doneList.length / (doneList.length + todoList.length) * 100;
        //
        //     document.getElementById('prog').style.width = percent + "%";
        // }












        return (
            <div>



                <Container>
                    <Row>
                        <Col md={{size:6, offset: 3}}>
                            <div className="card mt-3">
                                <div className="card-body bg-light">
                                    <form className='d-flex' onSubmit={saveWork}>
                                        <input type="text" className='form-control shadow-none' required
                                               placeholder='Type here...' name='todoWork'/>

                                        <button type='submit' className='btn btn-secondary ml-3'>Add</button>
                                    </form>
                                </div>
                            </div>
                        </Col>


                        <Col md={{size: 8, offset: 2}} className='mt-4'>
                            <div className="progress">
                                <div className="progress-bar bg-secondary" id='prog' style={{width: 0}}></div>
                            </div>
                        </Col>


                    </Row>



                    <Row className='mt-4'>
                        <Col md={6}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>To do list</h4>
                                </div>
                                <div className="card-body">
                                    {this.state.todolist.map((item,index) => {
                                        console.log(item);
                                        return(
                                            <div className="item shadow border d-flex justify-content-between my-2 bg-light">
                                                <span className='p-2'>{item.todoWork}</span>
                                                <button type='button' onClick={()=> removePlus(index)} className='btn shadow-none border-0'>&#x2714;</button>
                                            </div>



                                        )
                                    })}

                                </div>
                            </div>
                        </Col>




                        <Col md={6}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Done list</h4>
                                </div>
                                <div className="card-body">
                                    {this.state.donelist.map((item,index) => {
                                        console.log(item);
                                        return(
                                            <div className="item shadow border d-flex justify-content-between my-2 bg-light">
                                                <span className='p-2'>{item.todoWork}</span>
                                                <button type='button' onClick={()=> deleteWork(index)} className='btn shadow-none border-0'>&times;</button>
                                            </div>




                                        )
                                    })}

                                </div>
                            </div>
                        </Col>
                    </Row>




                </Container>



            </div>
        );
    }
}

export default Todolist;