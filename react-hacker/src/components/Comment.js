import React from 'react';
import axios from 'axios';

export default class SubmitForm extends React.Component {
    state = {
        comment: ''
    }

    handleChangeComment = event => {
        this.setState({ comment: event.target.value });
    }

    handleSubmitComment = event => {
        event.preventDefault();

        const body = {
            'content': this.state.comment

        };
        console.log(this.state.comment)
        console.log(body)

        axios.post("https://evening-harbor-41552.herokuapp.com/api/submissions/62815097bf45b1ecd10b5bf6/comment",
            {content: this.state.comment}, {headers: { 'X-API-KEY': '4zl0ffbd6ya230212jl5r1fusd2qht'}})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitComment}>
                    <label>
                        Comment:
                        <input type="text" name="comment" onChange={this.handleChangeComment} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}