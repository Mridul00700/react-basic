import React from "react";
import Paragraph from "./Paragraph";

function Demo(props) {
    console.log("this is demo");
    return (
        <Paragraph>{props.show ? 'This is new!' : ''}</Paragraph>
    )
}

export default React.memo(Demo);
