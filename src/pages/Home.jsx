import Destaques from '../components/Home/Destaques'
import Hero from '../components/Home/Hero'
import Vantagens from '../components/Home/Vantagens'
import carros from '../data/carros'
import Card from '../components/Card'

const Home = () => {
      const destaques = carros.slice(0, 3);
  return (
    <div>
        <Hero/>
        <Vantagens/>
        <Destaques>{destaques.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}</Destaques>
    </div>
  )
}

export default Home