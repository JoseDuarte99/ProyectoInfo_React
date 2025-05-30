import { ProductCard, TitleSection, Section, Search, Navbar} from "./components"

import imgSrc from "./assets/OIP.jpg";
import imgIcon from "./assets/LogoMeLi.svg";
import imgShippingFree from "./assets/EnvioGratis.webp";
import imgSearch from "./assets/lupa.svg";

// COMPONETE HEADER MERCADO LIBRE
export function Header(){
    
    return(
        <div className="absolute bg-yellow-300 top-0 left-0 w-screen pl-5 pt-2 pb-1">
            <div className="flex">
                <a href="#"><img className="ml-15 mr-12" width={160} src={imgIcon} alt="Logo de Mercado Libre" /></a>
                <Search 
                  placeholder="Buscar productos, marcas y más…" 
                  imgSearch= {imgSearch}
                />
                <a href="#"><img className="ml-20 mr-4  h-[2.8rem]" src={imgShippingFree} alt="Logo de Mercado Libre" /></a>
            </div>
            <>
                <Navbar />
            </>
        </div>
    );
};

// COMPONETE MAIN MERCADO LIBRE
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
