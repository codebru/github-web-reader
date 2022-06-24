import PropTypes from 'prop-types';
import Head from 'next/head';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SiteStyle from './Style';

function Layout(props) {
  const { children, paths } = props;
  const [enableStyle, setEnableStyle] = useState(true);

  const toggleStyle = () => setEnableStyle(!enableStyle);

  return (
    <div className="page">
      <div className="row page-inner">
        <Head>
          <title>Markdown Reader</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        <header className="col-sm-12 col-lg-3 outer">
          <div className="inner">
            <Header paths={paths} />
          </div>
        </header>
        <main className="col-sm-12 col-lg-9 outer">
          <div className="inner">
            {children}
          </div>
        </main>
        <footer className="col-sm-12 outer">
          <div className="inner">
            <Footer toggleStyle={toggleStyle} />
          </div>
        </footer>
        {
          enableStyle
            ? <SiteStyle />
            : null
        }
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Layout;
