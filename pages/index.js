import PropTypes from 'prop-types';
import Marked from 'marked';
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Content from '../components/Content';

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

async function getPage(path) {
  const uri = `https://api.github.com/repos/codebru/markdown-test-repo/contents/${path}`;
  const res = await Fetch(uri);
  const data = await res.json();
  if (!Object.prototype.hasOwnProperty.call(data, 'content')) {
    if (Object.prototype.hasOwnProperty.call(data, 'message')) {
      // Error possibly
      return data.message;
    }
    return false;
  }
  const contentMd = Buffer.from(data.content, data.encoding).toString();
  const contentHTML = Marked(contentMd);
  return contentHTML;
}

async function getDirectory(path) {
  try {
    const uri = `https://api.github.com/repos/codebru/markdown-test-repo/contents/${path}`;
    const res = await Fetch(uri);
    const data = await res.json();
    if (!data || !Array.isArray(data) || !Object.prototype.hasOwnProperty.call(data[0], 'path')) {
      throw new Error('Failed to fetch tree.');
    }
    const pathArray = data.map(entry => entry.path);
    return pathArray;
  } catch (e) {
    return `Unable to get data: ${e}`;
  }
}

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
    uri2 = uri.lastIndexOf('/') + 1;
    uri2 = uri.substring(0, uri2);

    pathArray = await getDirectory(uri2);
  }

  return { content: contentHTML, paths: pathArray };
};

export default Index;
