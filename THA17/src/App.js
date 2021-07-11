// import React from 'react';
import './App.css';
import Card from './components/Card';
import Container from './components/Container';

function App() {

  return (
    <div className="container">
      <div>
       <Container />
      </div>
      <div className="cards">
        <Card img="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg" title="Pizza" calorie="56"/>
        <Card img="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg" title="Burger" calorie="69"/>
        <Card img="https://media.istockphoto.com/photos/glass-of-cola-with-ice-cubes-and-lemon-slices-picture-id511480744?b=1&k=6&m=511480744&s=170667a&w=0&h=Rps60T5lJP-pd2VtyxrGsw1OTd39PsndaazC7o7yqQQ=" title="Coke" calorie="500"/>
        <Card img="https://cdn.pixabay.com/photo/2014/09/06/15/07/cake-436987__340.jpg" title="Brownie" calorie="180"/>
        <Card img="https://cdn.pixabay.com/photo/2017/07/16/11/55/fried-2509080__340.jpg" title="Fried Rice" calorie="90"/>
        <Card img="https://media.istockphoto.com/photos/closeup-of-classic-meat-lasagna-with-cheese-on-gray-plate-copy-space-picture-id1219897473?b=1&k=6&m=1219897473&s=170667a&h=3ZgQ1Q-J-eJD1xrnuoMgl-MxjZ3ATDqhrYlDmB6L-DU=" title="Lasania" calorie="200"/>
        <Card img="https://media.istockphoto.com/photos/indian-chat-picture-id1267893613?b=1&k=6&m=1267893613&s=170667a&w=0&h=2IYN6vStk8eAoMMW9qUTGBZrFMZeRD1bY9VJ8oq8Qps=" title="Pani Puri" calorie="10"/>
      </div>
    </div>
  )
}
export default App;
