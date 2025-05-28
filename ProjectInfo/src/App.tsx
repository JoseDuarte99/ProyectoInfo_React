import { ProductCard, TitleSection, Section} from "./components"
import imgSrc from "./assets/OIP.jpg";

function App() {
  return (
    <>
    <Section titleSection={<TitleSection title="Más vendidos de la semana en Tecnología" anchor="Ir a Más vendidos" />}>
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
    </Section>
    </>
  )
}


export default App
