import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'; // Your global styles
import './../styles/Home.module.css'; // Your global styles
import BootstrapClient from './components/BootstrapClient';
import AosClient from './components/AosClient';
import Header from './components/header'


export default function App({ Component, pageProps }) {
 
  return (
    <>
       <BootstrapClient/>
       <AosClient/>
      <main className='container-fluid px-4'>
         <div className='row mt-5' style={{ height: '92vh' }}>
            <div className='col-3 '>
              <Header/>
            </div>
            <div className='col-9 bg-secondary'>
              <Component {...pageProps} />
            </div>
         </div>
      </main>
      
    </>
  );
} 