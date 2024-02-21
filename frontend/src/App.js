import{Admin, Resource} from 'react-admin'

import { editProducts, listProducts, createProducts} from './components/Products'
import dataProvider from './dataProvider';
import { listImage, editImage, createImage } from './components/Images';


function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
          <Resource name='products' list={listProducts} edit={editProducts} create={createProducts}  options={{ label: 'Tour' }}></Resource>
        
      
        
        <Resource name='tour_image' list={listImage} edit={editImage} create={createImage} ></Resource>
      </Admin>
     
    </div>
  );
}

export default App;
