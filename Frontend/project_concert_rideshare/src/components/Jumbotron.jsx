import React from "react";

function Jumbotron({ title, text }) {
return (
    <div class="p-5 jumbotron-fluid">
        <div class="container text-center">
        <h1 class="display-4">{title}</h1>
        <p class="lead">{text}</p>
        </div>
    </div>
);
}

export default Jumbotron;