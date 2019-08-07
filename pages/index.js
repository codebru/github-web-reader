import PropTypes from 'prop-types';
import Marked from 'marked';
import Fetch from 'isomorphic-unfetch';
import ReactParse from 'html-react-parser';
import Layout from '../components/Layout';
import Content from '../components/Content';

function Index(props) {
  const { content } = props;
  return (
    <div>
      <Layout>
        <Content content={content} />
      </Layout>
    </div>
  );
}

Index.propTypes = {
  content: PropTypes.string.isRequired,
};

Index.getInitialProps = async ({ query }) => {
  let uri = null;
  if (query.pathName && query.pathName !== '/') {
    uri = query.pathName;
  } else {
    uri = 'README.md';
  }

  uri = `https://raw.githubusercontent.com/codebru/full-web-dev/master/${uri}`;
  const res = await Fetch(uri);
  const data = await res.text();
  const contentMd = data;
  const contentHTML = Marked(contentMd);
  const contentReact = ReactParse(contentHTML);

  return { content: contentReact };
};

export default Index;
