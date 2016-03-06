"use strict";

var React = require('react');
var Footer = require('./footer');

var Home = React.createClass({
    render: function() {
        return (
          <div>
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Flux for ultra-responsive web apps.</p>
            </div>
            <Footer/>
          </div>
        );
    }
});

module.exports = Home;
