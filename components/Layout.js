import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import SiteStyle from './Style';

function Layout(props) {
  const { children } = props;
  return (
    <div className="page">
      <div className="row page-inner">
        <Head>
          <title>Markdown Reader</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        <header className="col-sm-12 col-lg-2 outer">
          <div className="inner">
            <Header />
          </div>
        </header>
        <main className="col-sm-12 col-lg-10 outer">
          <div className="inner">
            {children}
          </div>
        </main>
        <footer className="col-sm-12 outer">
          <div className="inner">
            <Footer />
          </div>
        </footer>
        <SiteStyle />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
