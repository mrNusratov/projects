


function Card4() {
    return(
        <div className="p-3 mt-3 bg-white">
            <div className="fontsize">
                <a href="#" className='pr-2  text-decoration-none text-grey border-right'>
                    Help Center
                </a>

                <a href="#" className='pr-2 pl-2  text-decoration-none text-grey border-right'>
                    About
                </a>

                <a href="#" className='pr-2 pl-2 text-decoration-none text-grey border-right'>
                    Privacy Policy
                </a>

                <a href="#" className='pr-2 pl-2 text-decoration-none text-grey border-right'>
                    Community Guidelines
                </a>

                <a href="#" className='pr-2 pl-2 text-decoration-none text-grey border-right'>
                    Cookies Policy
                </a>


                <a href="#" className='pr-2 pl-2 text-decoration-none text-grey border-right'>
                    Career
                </a>

                <a href="#" className='pr-2 pl-2 text-decoration-none text-grey'>
                    Language
                </a>
                <br/>


            </div>

            <div className="d-flex mt-3 align-items-center">
                <div>
                <img src="images/logo.PNG" style={{
                    width: '22px'
                }} alt=""/>
                <b className='orange-text ml-1'>Workwise</b>
                </div>

                <div className='ml-auto'>
                    <p className='fontsize mb-0 text-grey'>copyright2019</p>
                </div>
            </div>
        </div>
    )
}

export default Card4;