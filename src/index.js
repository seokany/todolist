import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => (
    <div>HelloWorld</div>    
)
const OtherWorld = () => (
    <div>될까?</div>
)

//nested
const SuperWorld = () => (
    // <div>슈퍼월드! <HelloWorld/></div>
    <div>
        <div>easy peasy</div>
        <HelloWorld/>
        <OtherWorld/>
        <AnotherWorld/>
    </div>
)

// 위 아래 는 상관없는듯;;;
const AnotherWorld = ( ) => (
    <div>아래 놔도 될까?</div>
)



ReactDOM.render(<SuperWorld/>, document.getElementById("root"));

