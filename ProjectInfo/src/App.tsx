import { ProductCard, TitleSection, Section, Header} from "./components"

import imgSrc from "./assets/OIP.jpg";



function App() {
  return (
    <>
    <Header />
    <Section titleSection={<TitleSection title="Más vendidos de la semana en Tecnología" link="Ir a Más vendidos" />}>
      <ProductCard 
      img={imgSrc}
      title="Auriculares Bluetooth"
      previousPrice={9999}
      price={5999} 
      shippingInfo="Envío gratis" 
      />
      <ProductCard 
      img={imgSrc}
      title="Auriculares Bluetooth"
      previousPrice={9999}
      price={5999} 
      priceInfo="Descuento exclusivo" 
      shippingInfo="Envío gratis" 
      />
      <ProductCard 
      img={imgSrc}
      title="Auriculares Bluetooth"
      previousPrice={9999}
      price={5999} 
      priceInfo="Descuento exclusivo" 
      />
      <ProductCard 
      img={imgSrc}
      title="Auriculares Bluetooth"
      price={5999} 
      priceInfo="Descuento exclusivo" 
      shippingInfo="Envío gratis" 
      />
      <ProductCard 
      img={imgSrc}
      title="Auriculares Bluetooth"
      previousPrice={9999}
      price={5999} 
      priceInfo="Descuento exclusivo" 
      />
      <ProductCard 
      img={imgSrc}
      title="Auriculares Bluetooth"
      previousPrice={9999}
      price={5999} 
      priceInfo="Descuento exclusivo" 
      shippingInfo="Envío gratis" 
      />
    </Section>
    </>
  )
}


export default App
