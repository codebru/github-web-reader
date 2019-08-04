import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

/* This will allow for a global style later */

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
