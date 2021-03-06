import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Content from '../components/Content';
import { getPage, getTree } from '../utilities/GithubAPI';

function Index(props) {
  const { content, paths } = props;
  return (
    <div>
      <Layout paths={paths}>
        <Content content={content} />
      </Layout>
    </div>
  );
}

Index.propTypes = {
  content: PropTypes.string.isRequired,
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Index.getInitialProps = async ({ query }) => {
  let pathArray = [];
  let contentHTML = null;
  let uri = null;

  if (query.pathName && query.pathName !== '/') {
    uri = query.pathName;
  } else {
    uri = 'README.md';
  }

  contentHTML = await getPage(uri);
  if (!contentHTML) {
    // This means that the content is a DIR
    contentHTML = await getPage(`${uri}/README.md`);
    if (!contentHTML) {
      contentHTML = 'This is a directory';
    }
  }

  pathArray = await getTree();

  return { content: contentHTML, paths: pathArray };
};

export default Index;
