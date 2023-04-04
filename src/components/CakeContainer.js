import React from "react";
import { buyCake } from "@/redux";
import { connect } from "react-redux";
import { useState } from "react";

const CakeContainer = (props) => {
    const [number, setNumber] = useState(1)


    return (
        <div>
            <h2>Number of cakes {props.numOfcakes} </h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number}cake</button>
        </div>
    );
};

const mapStateToProp = (state) => {
    return {
        numOfcakes: state.cake.numOfcakes,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number)),
    };
};

const ConnectedContainer = connect(
    mapStateToProp,
    mapDispatchToProps
)(CakeContainer);
export default ConnectedContainer;
