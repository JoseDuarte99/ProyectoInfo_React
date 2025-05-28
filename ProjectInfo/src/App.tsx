import { ProductCard, TitleSection } from "./components"
import imgSrc from "./assets/OIP.jpg";

function App() {
  return (
  <>
    <TitleSection 
    title="Más vendidos de la semana en Tecnologia"
    anchor="Ir a Más vendidos"
    />
    <ProductCard 
        img={imgSrc}
        title="Auriculares Bluetooth"
        previousPrice={9999}
        price={5999} 
        priceInfo="Descuento exclusivo" 
        shippingInfo="Envío gratis" 
    />

  </>
  )
}

export default App
