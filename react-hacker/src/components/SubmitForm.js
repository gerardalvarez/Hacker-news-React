import React from 'react';
import axios from 'axios';

export default class SubmitForm extends React.Component {
  state = {
    title: '',
    url: '',
    text: ''
  }



  handleChangeTitle = event => {
      this.setState({ title: event.target.value });
  }

  handleChangeUrl = event => {
      this.setState({ url: event.target.value });
  }

  handleChangeText = event => {
      this.setState({ text: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
        title: this.state.title,
        url: this.state.url,
        text: this.state.text
    };


    axios.post("https://evening-harbor-41552.herokuapp.com/api/submissions",
        {title: this.state.title, url: this.state.url, text: this.state.text}, {headers: { 'X-API-KEY': '4zl0ffbd6ya230212jl5r1fusd2qht'}})
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
              Submission:
              <input type="text" name="Title" onChange={this.handleChangeTitle} />
            </label>
              <input type="text" name="url" onChange={this.handleChangeUrl} />
              <input type="text" name="text" onChange={this.handleChangeText} />
            <button type="submit">Add</button>
          </form>
        </div>
    )
  }
}