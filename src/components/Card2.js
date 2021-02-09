import React from 'react';

class Card2 extends React.Component{
    render() {
        return(
            <div className='bg-white'>
                
                <div className="orange bg-place">
                    <img src="images/Ellipse.png" alt=""/>
                </div>

                <div className="text-center pb-3">
                    <h4 className='text-dark mb-0 pt-5 mt-2'>John Doe</h4>
                    <p className="text-grey" style={{
                        fontSize:  '13px',
                    }}>Graphic designer at Self Employed</p>
                    
                    <div className="line"></div>

                    <h4 className="text-grey">Following</h4>

                    <b>34</b>

                    <div className="line"></div>

                    <h4 className="text-grey">Followers</h4>

                    <b>155</b>

                    <div className="line"></div>

                    <a href="#" className='text-decoration-none orange-text'>
                    <b>View profile</b>
                    </a>

                </div>

            </div>
        )
    }
}

export default Card2;