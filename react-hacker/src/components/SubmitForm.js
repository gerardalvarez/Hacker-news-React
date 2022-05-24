import React from 'react';
import axios from 'axios';

export default class SubmitForm extends React.Component {
  state = {
    comment: '',
  }



  handleChange = event => {
    this.setState({ comment: event.target.value });
    console.log(event.target.value)
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
        comment: this.state.comment
    };

    axios.post("https://evening-harbor-41552.herokuapp.com/api/submissions/626081ca28c15e85fa959d34/comments",
        { header: { "X-API-KEY": "zl0ffbd6ya230212jl5r1fusd2qht"} })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Comment:
              <input type="text" name="comment" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
    )
  }
}