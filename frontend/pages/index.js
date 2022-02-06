import React from 'react';
import Axios from 'axios';
import Messagebox from '../components/Messagebox';

export default class PublicMessagesPage extends React.Component {
  constructor() {
    super();
    this.state = { user: '', message: '', messages: [] };
    Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  }

  componentDidMount() {
    Echo.channel('public.room')
      .subscribed(() => {
        console.log('You are subscribed');
      })
      .listen('.message.new', (data) => {
        data.isOwner = data.user === this.state.user;
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
      <div className="container w-100 vh-100 bg-dark text-white">
        <div className="d-flex h-100 flex-column">
          <div className="p-3">
            <h1 className="h5 mb-1">Public Space</h1>
            <p className="text-muted">Post your random thoughts for the world to see</p>
          </div>

          <div className="d-flex flex-column justify-content-end pt-3 h-100 overflow-auto">
            {this.state.messages.map((message) => (
              <Messagebox key={message.id} message={message} />
            ))}
          </div>

          <div className="py-2">
            <form className="overflow-hidden" onSubmit={(e) => this.handleSendMessage(e)}>
              <input
                type="text"
                className="form-control form-control-sm text-white bg-dark rounded-0 border-dark ps-0"
                placeholder="Set your username"
                value={this.state.user}
                onChange={(e) => this.setState({ user: e.target.value })}
                required
              />
              <div className="d-flex align-items-center overflow-hidden">
                <input
                  type="text"
                  className="form-control text-white bg-dark rounded-0 border-dark ps-0"
                  placeholder="Type your message..."
                  value={this.state.message}
                  onChange={(e) => this.setState({ message: e.target.value })}
                  required
                />
                <button className="btn btn-primary" onClick={(e) => this.handleSendMessage(e)}>
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
