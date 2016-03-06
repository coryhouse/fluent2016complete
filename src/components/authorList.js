"use strict";

var React = require('react');
var AuthorActions = require('../actions/authorActions');

var AuthorList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    deleteAuthor: function(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
    },

    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;
