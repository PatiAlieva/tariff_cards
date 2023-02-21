import CSSModules from 'react-css-modules';
import style from './App.module.scss';
import Cards from './components/Tariffs/Tariffs';
import data from './data.json';

function App() {
  return (
    <div styleName="App">
      {data.map((card) => 
        <Cards 
          name={card.name} 
          price={card.price} 
          speed={card.speed} 
          color={card.color}
          isSelected={card.isSelected}/>
      )}
    </div>
  );
}

export default CSSModules(App, style)
