import Box2_1 from "./Box2_1";


function Box2() {
    return(
        <div className="mt-3 bg-white">
            <div className="d-flex p-3 justify-content-between align-items-center">
                <div><b>Top Jobs</b></div>
                <div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <div className="line mt-0 mb-0"></div>

            <div className="p-3">
               <Box2_1/>
               <Box2_1/>
               <Box2_1/>
               <Box2_1/>
               <Box2_1/>
            </div>

        </div>
    )
}

export default Box2;