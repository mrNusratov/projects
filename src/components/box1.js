

function Box1() {
    return(
        <div className="text-center bg-white pb-3">
            <div className="d-flex justify-content-center">
                <img src="images/logo.PNG" className='shadow mb-3 mt-4' style={{width: '65px'}} alt=""/>
            </div>
            <b>Track Time on Workwise</b>
            <p className="fontsize text-grey">Pay only for the hours worked</p>

            <div className="line"></div>
            <a href="#" className='text-decoration-none text-dark font-weight-bold' style={{fontSize: '18px'}}>SIGN UP</a><br/>
            <a href="#" className='text-decoration-none orange-text font-weight-bold'>Learn more</a>
        </div>
    )
}

export default Box1;