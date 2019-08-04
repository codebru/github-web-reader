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
      <nav>
        <menu>
          <HeaderLink title="home" link="/" />
        </menu>
      </nav>
      <hr />
    </div>
  );
}

export default Header;
