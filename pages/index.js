import Layout from '../components/Layout';
import BlogList from '../components/Blog/List';

function Index() {
  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <BlogList />
      </Layout>
    </div>
  );
}

export default Index;
