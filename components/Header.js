import PropTypes from 'prop-types';
import Link from 'next/link';
import { githubUser, githubRepo } from '../config';

function HeaderLink(props) {
  const { link } = props;
  let { title } = props;

  // Remove file extension
  title = title.replace(/\.[^/.]+$/, '');

  return (
    <li>
      <Link href={`/${link}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
}

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function Header(props) {
  const { paths } = props;
  let pathElement = null;
  if (paths && Array.isArray(paths)) {
    pathElement = paths.map(path => <HeaderLink title={path} link={path} />);
  } else {
    pathElement = String(paths);
  }

  return (
    <div>
      <h1><strong>{githubRepo}</strong></h1>
      <h2>by {githubUser}</h2>
      <nav>
        <ul>
          {pathElement}
        </ul>
      </nav>
    </div>
  );
}

Header.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
