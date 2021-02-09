import React, {Component} from 'react';
import './style.css';

class Trello extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isCardShow: false,
            boardTitle: "",
            boards: [],
            selectedBoard: -1,
            itemTitles: [],
            selectedItem: -1,
            selectedBoardIndex: -1,
        }
    }



    render() {


        const changeCardShow =() => {
            this.setState({isCardShow: !this.state.isCardShow})

        };

        const handleChange = (e) => {
          this.setState({boardTitle: e.target.value})
        };

        const addBoard = () => {

            if (this.state.selectedBoard >= 0 ){
                this.state.boards[this.state.selectedBoard].title= this.state.boardTitle;
            }else {

                this.state.boards.push({
                    title: this.state.boardTitle,
                    items: [],
                });

            }


            this.setState({boards: this.state.boards, boardTitle: '', selectedBoard: -1});
            changeCardShow();
        };




        const deleteBoard = (index) => {
            this.state.boards.splice(index,1);
            this.setState({boards: this.state.boards})
        };

        const editBoard = (index) => {
          changeCardShow();
          this.setState({boardTitle: this.state.boards[index].title, selectedBoard: index})
        };

        const handleItemChange = (e, index) => {

            this.state.itemTitles[index] = e.target.value;

            this.setState({itemTitles: this.state.itemTitles});

        };




        const addItem = (index) => {

            // if (this.state.itemTitles[index].length >0)


                if (this.state.selectedItem >= 0){
                    this.state.boards[index].items[this.state.selectedItem] = this.state.itemTitles[index];
                } else {

                    this.state.boards[index].items.push(this.state.itemTitles[index]);

                }
                this.state.itemTitles[index] = "";
                this.setState({boards: this.state.boards, itemTitles: this.state.itemTitles, selectedItem: -1});


        };



        const deleteItem = (index1, index2) => {
            this.state.boards[index1].items.splice(index2, 1);

            this.setState({boards: this.state.boards});

        };


        const editItem = (index, index2) => {
            this.state.itemTitles[index] = this.state.boards[index].items[index2];

            this.setState({itemtitles: this.state.itemTitles, selectedItem: index2});
        };



        return (
            <div>


                <div className="container">
                    <div className="row mt-3">


                        <div className="col-3">
                            <button type='button' onClick={changeCardShow} className='btn btn-success btn-block'>Add board</button>

                            <div className={`card mt-3 ${this.state.isCardShow === true ? '' : 'd-none'}`}>
                                <div className="card-body">
                                    <textarea onChange={handleChange} value={this.state.boardTitle} className='form-control' placeholder='Type here...' />
                                    <button type='button' onClick={addBoard}
                                            className={`btn ${this.state.selectedBoard >= 0 ? 'btn-primary' : 'btn-success'} d-block 
                                            ml-auto mt-3`}>{this.state.selectedBoard >= 0 ? "Edit" : "Add"}
                                    </button>
                                </div>
                            </div>

                        </div>


                        <div className="col-9">
                            <div className="row">
                                {this.state.boards.map((item,index) => (

                                    <div className="col-4 mb-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 onClick={()=> editBoard(index)}>{item.title}</h5>
                                                <button type='button' onClick={()=> deleteBoard(index)} className='close'>&times;</button>
                                            </div>
                                            <div className="card-body">
                                                {item.items.map((item2, index2) => (
                                                    <div className="item position-relative">
                                                        <p className='mb-0' onClick={()=> editItem(index, index2)} style={{minHeight: 16}}>{item2}</p>
                                                        <button type='button' onClick={()=> deleteItem(index, index2)} className='close'>&times;</button>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="card-footer">
                                                <textarea className='form-control' value={this.state.itemTitles[index]} onChange={(e)=> handleItemChange(e, index)} placeholder='Type here'/>
                                                <button type='button' onClick={()=> addItem(index)} className={`btn mt-3 d-block ml-auto ${this.state.selectedBoardIndex == index ? 'btn-primary' : "btn-success"}`}>
                                                    {this.state.selectedBoardIndex == index ? 'Edit' : "Add"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>



                                ))}
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Trello;