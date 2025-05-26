import { ProductCard } from "./components"

function App() {
  return (
  <>
            <ProductCard 
                img="/producto1.jpg" 
                title="Auriculares Bluetooth" 
                price={5999} 
                priceInfo="Descuento exclusivo" 
                shippingInfo="Envío gratis" 
            />
            
            <ProductCard 
                img="/producto1.jpg" 
                title="Zapatillas deportivas" 
                price={18999} 
                priceInfo="12 cuotas sin interés" 
                shippingInfo="Llega en 24hs" 
            />

            <ProductCard 
                img="/producto1.jpg" 
                title="Smartwatch fitness" 
                price={24999} 
                priceInfo="10% off con Mercado Pago" 
                shippingInfo="Retiro en tienda disponible" 
            />

            <ProductCard 
                img="/producto1.jpg" 
                title="Mochila impermeable" 
                price={7999} 
                priceInfo="3 cuotas sin interés" 
                shippingInfo="Envío rápido" 
            />
        </>
  )
}

export default App
