import './App.css';
import Header from './Header';
import Footer from './Footer';
import Tours from './Tours';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Details from "./Details";


const arr =
  [{
    id: 1,
    name: 'petra',
    info: 'a very nice and peacful place that offers relaxing view and non-forgotable times',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2i2kLi59oYLvY-Xny-ykOjmGFki9XMjbZEoo5LK9&s',
    price: 15
  },
  {
    id: 2,
    name: 'Wadi Rum',
    info: 'a very nice and peacful place that offers relaxing view and non-forgotable times',

    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7e/4c/1c/wadi-rum-bedouin-camp.jpg',
    price: 20
  },
  {
    id: 3,
    name: 'Dead Sea',
    info: 'a very nice and peacful place that offers relaxing view and non-forgotable times',
    image: 'https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/dead-sea2.jpg',
    price: 13
  },
  {
    id: 4,
    name: 'Aqaba',
    info: 'a very nice and peacful place that offers relaxing view and non-forgotable times',
    image: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/aqaba.jpg',
    price: 22
  },
  {
    id: 5,
    name: 'Irbid',
    info: 'a very nice and peacful place that offers relaxing view and non-forgotable times',
    image: 'https://garaanews.com/upload/2020-06-28/304420_5_1593348437.jpg',
    price: 15
  }];



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Tours arr={arr} />} />
        <Route exact path="tour/:id" element={<Details arr={arr} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
