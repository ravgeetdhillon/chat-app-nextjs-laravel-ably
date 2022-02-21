import React from 'react';
import Axios from 'axios';
import Messagebox from './Messagebox';

export default class PublicMessagesPage extends React.Component {
  constructor() {
    super();
    this.state = { user: '', message: '', messages: [] };
    Axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  }

  componentDidMount() {
    window.Echo.channel('public.room')
      .subscribed(() => {
        console.log('You are subscribed');
      })
      .listen('.message.new', (data) => {
        this.setState({ messages: [...this.state.messages, data], message: '' });
      });
  }

  async handleSendMessage(e) {
    e.preventDefault();

    if (!this.state.user) {
      alert('Please add your username');
      return;
    }

    if (!this.state.message) {
      alert('Please add a message');
      return;
    }

    try {
      await Axios.post('/new-message', {
        user: this.state.user,
        message: this.state.message,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="...">
        <div className="...">
          <div className="...">
            <h1 className="...">Public Space</h1>
            <p className="...">Post your random thoughts for the world to see</p>
          </div>

          <div className="...">
            {this.state.messages.map((message) => (
              <Messagebox key={message.id} message={message} />
            ))}
          </div>

          <div className="...">
            <form className="..." onSubmit={(e) => this.handleSendMessage(e)}>
              <input
                type="text"
                className="..."
                placeholder="Set your username"
                value={this.state.user}
                onChange={(e) => this.setState({ user: e.target.value })}
                required
              />
              <div className="...">
                <input
                  type="text"
                  className="..."
                  placeholder="Type your message..."
                  value={this.state.message}
                  onChange={(e) => this.setState({ message: e.target.value })}
                  required
                />
                <button className="..." onClick={(e) => this.handleSendMessage(e)}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
