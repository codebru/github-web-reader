import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Content from '../components/Content';
import { getPage, getDirectory } from '../utilities/GithubAPI';

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
  let uri2 = null;

  if (query.pathName && query.pathName !== '/') {
    uri = query.pathName;
  } else {
    uri = 'README.md';
  }

  contentHTML = await getPage(uri);

  if (!contentHTML) {
    // This means that the content is a DIR
    contentHTML = 'This is a directory';
    // Now get directory info from the same URI
    pathArray = await getDirectory(uri);
  } else {
    // Remove the file from the path so we can get the DIR
    uri2 = uri.lastIndexOf('/');
    uri2 = uri.substring(0, uri2);

    pathArray = await getDirectory(uri2);
  }

  return { content: contentHTML, paths: pathArray };
};

export default Index;
