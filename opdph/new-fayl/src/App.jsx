
import './App.css';

function App() {
  return (
    <header>
     <div className='header__div'>
      <h1 className="header_text">Ваша карзина,<span className='headr__mini_text'>3 товар</span></h1>
     </div>
     <div className="header_min__block">
      <div className="min__block_box_left">
      <p className="min__blokc_text">снать все</p>
      </div>
      <div className='min__block_box' >
       <p className="min__block_boom">ближайшая дата даставки</p>
      <p className='p__look'>29 май(Завтра)</p>
      </div>
     </div>
    </header>
  );
}

export default App;
