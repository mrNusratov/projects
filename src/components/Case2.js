function Case2() {
    return (
        <div className='mt-3 p-3 case2 bg-white'>
            <div className="d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                    <img src="images/Ellipse.png" alt=""/>
                    <div className='ml-2'>
                        <b>John Doe</b>
                        <p className="mb-0 text-grey">3 min ago</p>
                    </div>
                </div>

                <div>
                    <a href="#">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </a>
                </div>

            </div>


            <div className="mt-3 d-flex align-items-center">
                <img src="images/img7.PNG" style={{width: '20px', height: '20px'}} alt=""/>
                <span className='text-grey mr-3 fontsize'>Epic coder</span>

                <img src="images/img8.PNG" style={{width: '20px', height: '20px'}} alt=""/>
                <span className='text-grey fontsize'>India</span>

                <div className="ml-auto">
                    <button type='button' className='btn btn-sm btn-success'>
                        <img src="images/bookmark.svg" style={{width: '17px', height: '16px'}} alt=""/>
                    </button>

                    <button type='button' className='btn ml-2 border-0 btn-sm orange'>
                        <img src="images/email.svg" style={{width: '17px', height: '16px'}} alt=""/>
                    </button>


                    <button type='button' className='btn ml-2 border-0 btn-sm blue'>
                        <span className='text-white fontsize'>Bid Now</span>
                    </button>
                </div>


            </div>
            <div className="mt-3"></div>

            <b>Senior wordpress developer</b>

            <div className="mt-3">
                <button type='button' className='btn btn-sm blue'>
                    <span className='text-white fontsize'>Full time</span>
                </button>

                <b className='ml-3'>$30/hr</b>

                <p className='fontsize mt-3 mb-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur cupiditate debitis
                    doloremque fugiat illo, magnam maxime.</p>
                <a href="#" className='font-weight-bold text-decoration-none orange-text'>View more</a>
            </div>


            <div className="d-flex mt-3">
                <div className="progs">
                    HTML
                </div>

                <div className="progs">
                    PHP
                </div>


                <div className="progs">
                    CSS
                </div>


                <div className="progs">
                    javascript
                </div>

                <div className="progs">
                    Wordpress
                </div>


            </div>
            
            <div className="line mt-3"></div>

            <div className="d-flex align-items-center">
                <div className="">
                    <img src="images/heart.svg" style={{width: '16px'}} alt=""/>
                    <span className='text-grey fontsize ml-1'>Like</span>
                </div>
                <div className="d-flex photo ml-3">
                    <img src="images/OvalCopy17.png" className='pos-img' alt=""/>
                    <img src="images/OvalCopy18.png" className='pos-img' alt=""/>
                    <img src="images/OvalCopy19.png" className='pos-img' alt=""/>
                    <img src="images/OvalCopy20.png" className='pos-img' alt=""/>
                </div>
                <div className="">
                    <img src="images/comment.svg" style={{width: '16px'}} alt=""/>
                    <span className='text-grey fontsize ml-1'>Comments 15</span>
                </div>



                <div className="ml-auto">
                    <img src="images/eye.svg" style={{width: '16px'}} alt=""/>
                    <span className='text-grey fontsize ml-1'>Views 50</span>
                </div>



            </div>

        </div>
    )
}

export default Case2;