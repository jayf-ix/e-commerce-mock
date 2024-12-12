import Header from './components/Header';
import SideBar from './components/SideBar';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Header />
      <div className='d-flex col-12'>
        <template className='position-fixed col-3 h-100 d-none d-md-block'>
          <SideBar />
        </template>
        <ProductList />
      </div>
    </>
  );
}

export default App;

