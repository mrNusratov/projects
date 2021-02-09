import React, {Component} from 'react';
import {toast} from "react-toastify";

import Slider from "react-slick";
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import ModalVideo from "react-modal-video";




class Plugins extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false,
        }
    }


    render() {

        const showToast = () => {
          toast.success("muvofaqiyatli saqlandi!");
          // toast.error("muvofaqiyatli saqlanmadi!");

        };

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
        };



        const changeModal = () => {
          this.setState({modalOpen: !this.state.modalOpen})
        };




        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <button onClick={showToast} className='btn btn-success' type='button'>Click me!</button>

                        </div>

                        <div className="col-6">
                            <Slider {...settings}>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                            </Slider>
                        </div>

                        <div className="col-2">
                            <LightgalleryProvider>
                                <LightgalleryItem src="Logo192.png">
                                    <img src="Logo192.png" alt="" width='60'/>
                                </LightgalleryItem>
                            </LightgalleryProvider>
                        </div>


                        <div className="col-4 mt-5">
                            <button className="btn btn-secondary" onClick={changeModal} type='button'>Open video!</button>
                            <ModalVideo isOpen={this.state.modalOpen} channel='youtube' videoId='h81k1_JmLbw' onClose={changeModal}/>
                        </div>



                    </div>
                </div>

            </div>
        );
    }
}

export default Plugins;