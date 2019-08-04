import PropTypes from 'prop-types';
import Link from 'next/link';

function PostLink(props) {
  const { title } = props;
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
}

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
};

function BlogList() {
  return (
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  );
}

export default BlogList;
