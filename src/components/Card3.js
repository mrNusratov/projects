import Card3_1 from "./Card3_1";
import React from "react";


function Card3() {
    return(
        <div className="">


            <div className="mt-3 bg-white">
                <div className="d-flex pb-0 p-3  justify-content-between align-items-center">
                    <div><b>Suggestions</b></div>
                    <a href='#'>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </a>
                </div>
                <div className="line"></div>

                <div className="p-3">
                    <Card3_1/>
                    <Card3_1/>
                    <Card3_1/>
                    <Card3_1/>
                    <Card3_1/>
                    <Card3_1/>


                    <div className="text-center p-2">

                        <a href="#" className='text-decoration-none orange-text'>
                            <b>View More</b>
                        </a>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Card3;