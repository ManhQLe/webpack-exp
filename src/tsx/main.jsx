import React from 'react';
import ReactDOM from 'react-dom';
const Fabric = require('office-ui-fabric-react/lib');
const {DefaultButton, PrimaryButton} = Fabric;

function randomClick(){
    alert("What")
}

ReactDOM.render(
<div>
    <DefaultButton>Test</DefaultButton>
    <br/>
    <PrimaryButton onClick={randomClick}>Test Button</PrimaryButton>
</div>
,document.getElementById("main"));





