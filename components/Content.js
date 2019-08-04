import React, { Component } from 'react';
import Marked from 'marked';
import Fetch from 'isomorphic-unfetch';
import ReactParse from 'html-react-parser';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    const res = await Fetch('https://raw.githubusercontent.com/codebru/full-web-dev/master/README.md');
    const data = await res.text();
    const contentMd = data;
    const contentHTML = Marked(contentMd);
    const contentReact = ReactParse(contentHTML);

    this.setState({ content: contentReact });
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        {content}
        <p>Test</p>
      </div>
    );
  }
}

export default Content;
