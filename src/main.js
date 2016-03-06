"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var HomePage = require('./components/homePage');
var Header = require('./components/header');
var AuthorPage = require('./components/authorPage');
var AboutPage = require('./components/aboutPage');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

var App = React.createClass({
    render: function() {
        var Child;

        switch(this.props.route) {
            case 'authors': Child = AuthorPage; break;
            case 'about': Child = AboutPage; break;
            default: Child = HomePage;
        }

        return (
            <div>
                <Header/>
                <Child/>
            </div>
        );

    }
});

function render() {
    var route = window.location.hash.substr(1);
    ReactDom.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
