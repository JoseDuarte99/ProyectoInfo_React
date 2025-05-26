
type ProductCardProps = {
    img: string;
    title: string;
    price: number;
    priceInfo: string;
    shippingInfo: string;
};

export function ProductCard({ img, title, price, priceInfo, shippingInfo }: ProductCardProps) {

    return (
        <div className="product-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <h4>${price.toLocaleString('es-AR')}</h4>
            <p>{priceInfo}</p>
            <p>{shippingInfo}</p>
        </div>
    );
}
