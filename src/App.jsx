//import logo from './logo.svg';
import Main from './components/Main';
import Header from './components/Header';
import Layout from './layouts/Layout';
function App() {
  return (
    <div className="App">
      <Layout>
        <Header></Header>
        <Main></Main>
      </Layout>
    </div>
  );
}
export default App;
