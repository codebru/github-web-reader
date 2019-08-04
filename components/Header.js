import PropTypes from 'prop-types';
import Link from 'next/link';

function HeaderLink(props) {
  const { link, title } = props;
  return (
    <li>
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </li>
  );
}

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function Header() {
  return (
    <div>
      <h1>Test Site</h1>
      <nav>
        <menu>
          <HeaderLink title="home" link="/" />
          <HeaderLink title="about" link="/about" />
        </menu>
      </nav>
    </div>
  );
}

export default Header;
