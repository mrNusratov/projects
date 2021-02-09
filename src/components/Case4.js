import Case2 from "./Case2";
import Container from "reactstrap/es/Container";


function Case4() {
    return (
        <div className='bg-white mb-5'>
            <Case2/>
            <div className="p-3">
                <div className="line" style={{marginTop: '-20px',}}></div>

                <div className="p-2 d-flex footer-plus justify-content-center">
                    <img src="images/plus.PNG" alt=""/>
                </div>

                <b>John Doe</b>

                <div className="mb-3">
                    <img src="images/schedule-24px.svg" style={{width: '18px'}} alt=""/>
                    <span className='fontsize ml-1 text-grey'>3 min ago</span>
                </div>

                <p>Lorem ipsum dolor sit amet.</p>


                <img src="images/reply-arrow.svg" style={{width: '18px'}} alt=""/>
                <a href='#' className='font-weight-bold text-decoration-none orange-text ml-1'>Reply</a>

                <div className="mt-3 mb-3 ml-5">
                    <b>John Doe</b>

                    <div className="mb-3">
                        <img src="images/schedule-24px.svg" style={{width: '18px'}} alt=""/>
                        <span className='fontsize ml-1 text-grey'>3 min ago</span>
                    </div>
                    <p className='mb-2'>Hi John</p>

                    <img src="images/reply-arrow.svg" style={{width: '18px'}} alt=""/>
                    <a href='#' className='font-weight-bold text-decoration-none text-grey ml-1'>Reply</a>
                </div>

                <b>John Doe</b>

                <div className="mb-3">
                    <img src="images/schedule-24px.svg" style={{width: '18px'}} alt=""/>
                    <span className='fontsize ml-1 text-grey'>3 min ago</span>
                </div>

                <p className="fontsize mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, fugit id incidunt placeat
                    quam quisquam quos repellat reprehenderit ut veritatis voluptatum. Ducimus, et, temporibus.
                </p>

                <img src="images/reply-arrow.svg" style={{width: '18px'}} alt=""/>
                <a href='#' className='font-weight-bold text-decoration-none text-grey ml-1'>Reply</a>

                <div className="d-flex mt-4 align-items-center">

                    <img src="images/OvalCopy17.png" style={{width: '40px', height: '40px'}} alt=""/>
                    <div className="input-group ml-2">
                        <input type="text" className="form-control bg-grey border-0 shadow-none" placeholder="Post a comment"/>

                        <div className="input-group-append">
                            <button type="button" className='btn ml-3 orange shadow-none'>
                                <span className="text-white">Send</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Case4;