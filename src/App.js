import React from 'react';
// import logo from './logo.svg';
// import Componente from './componenetes/Componentes';
// import Propiedades from './componenetes/Propiedades';
// import Eventos from './componenetes/Eventos';
// import RelojHooks from './componenetes/RelojHooks';
// import AjaxHooks from './componenetes/AjaxHooks';
// import Referencias from './componenetes/Referencias';
// import Formularios from './componenetes/Formularios';
// import ListaDeTareas from './componenetes/ListaDeTareas';
// import ReactBootstrap from './componenetes/ReactBootstrap';
// import PersonalityTest from './componenetes/PersonalityTest';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CardWidget from './components/CardWidget/CardWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from './components/Cards/Cards';
// import Flex from './components/Flex/Flex';



function App() {
  return (
    <div className="App">
      {/* <Flex> */}
      <Navbar logo="https://i.ibb.co/G71L4mn/shop.png" liHome="Home" liAbout="Tienda" liContact="Contacto">
        <CardWidget carrito="https://i.ibb.co/b7zFCWR/carrito.png" notification={0} />
      </Navbar>
      <ItemListContainer gretting= "¡Bienvenido!"/>

      <div className='d-flex justify-content-center'> 
        <Cards imgProduct = "https://essential.vtexassets.com/arquivos/ids/642450-800-auto?v=638023116661500000&width=800&height=auto&aspect=true" title="Remera Nike" description= "Remera Nike de algodon Color amarillo"/>
        <Cards imgProduct = "https://assets.adidas.com/images/w_600,f_auto,q_auto/8b009299fe5b44abb43cad5c01164832_9366/Pantalon_Deportivo_Negro_H20430_21_model.jpg" title="Pantalon Adidas" description= "Pantalon adidas negro"/>
        <Cards imgProduct = "https://media.gucci.com/style/DarkGray_Center_0_0_600x314/1659595532/681264_3HAGJ_2564_001_100_0000_Light-Gorra-de-bisbol-de-lona-jumbo-GG.jpg" title="Remera Gucci" description= "Gorra gucci dorada"/>
      </div>
      {/* </Flex> */}

    </div>
  );
}

export default App;
