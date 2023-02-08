import './App.css';
import Card from './Components/Card';
import { useState } from 'react'

function App() {
  const [articles] = useState([{
    title: "Liquide vaisselle",
    image: 'https://media.carrefour.fr/medias/b433bd6d77933dd6aee978c1983e4440/p_200x200/3560071241001-photosite-20200620-091131-0.jpg',
    description: 'Ceci est du liquide vaisselle pour laver vos couverts.',
},
{
    title: "Oeuf",
    image: 'https://media.carrefour.fr/medias/454cc08815263e56b9aee2974d8db5b5/p_200x200/3560071098285-0.jpg', 
    description: 'Des oeufs :/',
}]
);
  return (
    <div className="App">
      {articles.map((article, index) => {
      return <Card key={index} title={article.title} image={article.image} description={article.description} />
      })}
    </div>
  );
}

export default App;
