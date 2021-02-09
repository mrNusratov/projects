import './main.css';
import Card from "./components/Card";
import Card2 from "./components/Card2";

import {Col, Container, Row} from "reactstrap";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Box1 from "./components/box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Case1 from "./components/Case1";
import Case2 from "./components/Case2";
import Case3 from "./components/Case3";
import Case4 from "./components/Case4";


// var numberOne = 343;

function App() {
  return (
    <div className=''>

        <div className="back-color">
            <Card/>
            <Container>
                <Row className='mt-5'>

                    <Col xs={"3"} className="">
                        <Card2/>

                        <Card3/>

                        <Card4/>
                    </Col>



                    <Col xs={"6"} className="">
                        <Case1/>
                        <Case2/>
                        <Case3/>
                        <Case2/>
                        <Case4/>
                    </Col>




                    <Col xs={"3"} className="">
                        <Box1/>

                        <Box2/>

                        <Box3/>

                        <Card3/>
                    </Col>








                </Row>
            </Container>
        </div>

    </div>



  );
}

export default App;
