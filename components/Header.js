import PropTypes from 'prop-types';
import Link from 'next/link';

function HeaderLink(props) {
  const { link, title } = props;
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
      <h1>Title</h1>
      <nav>
        <ul>
          {pathElement}
          <HeaderLink title="about" link="/about.md" />
        </ul>
      </nav>
    </div>
  );
}

Header.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
