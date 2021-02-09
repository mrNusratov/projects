import React from 'react';

import {Button, Card, CardBody, CardFooter, CardHeader} from "reactstrap";


const Carditem = (props) => {

    console.log(props);

    return (
        <Card>
            <CardHeader>
                <h3>{props.title}</h3>
            </CardHeader>
            <CardBody>
                <p>{props.description}</p>
            </CardBody>
            <CardFooter>
                <Button color={props.color}>Click me!</Button>
            </CardFooter>
        </Card>
    );
};

export default Carditem;