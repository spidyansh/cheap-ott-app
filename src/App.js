import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Data from './components/Data';

function App() {
  return (
    <>
      <Header />
      <Card
        // imgsrc={Data[0].imgSource}
        title={Data[0].title}
        platform={Data[0].platform}
        content={Data[0].content}
      />
      <Card
        // imgsrc={Data[0].imgSource}
        title={Data[1].title}
        platform={Data[1].platform}
        content={Data[1].content}
      />

<Card
        // imgsrc={Data[0].imgSource}
        title={Data[2].title}
        platform={Data[2].platform}
        content={Data[2].content}
      />


    </>
  );
}

export default App;
