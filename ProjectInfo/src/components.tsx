// TIPADO DE PRODUCT-CARD
type ProductCardProps = {
    img: string;
    title: string;
    previousPrice: number;
    price: number;
    priceInfo: string;
    shippingInfo: string;
};

// TIPADO DE TITLE-SECTION
type TitleSectionProps = {
    title: string;
    anchor?: string;
};



// COMPONENTE PRODUCT-CARD
export function ProductCard(props: ProductCardProps) {
    const { img, title,previousPrice, price, priceInfo, shippingInfo } = props
    
    return (
        <div className="bg-white p-1">
            <img width={250} height={250} src={img} alt={title} />
            <h3 className="text-neutral-700 text-left text-xl mb-4">
                {title}
            </h3>
            <p className="text-neutral-500 text-left text-xs line-through">
                ${previousPrice.toLocaleString('es-AR')}
            </p>
            <h4 className="text-black text-left text-2xl font-medium">
                ${price.toLocaleString('es-AR')}
            </h4>
            <p className="text-green-700 text-left text-xs font-normal mb-2 mt-2">
                {priceInfo}
            </p>
            <p className="text-green-700 text-left text-xs font-bold ">
                {shippingInfo}
            </p>
        </div>
    );
};


// COMPONENTE PRODUCT-CARD
export function TitleSection(props: TitleSectionProps) {
    const {title, anchor} = props

    return (
        <div className="bg-white p-1">
            <h2  className="text-black text-left text-3xl font-medium pt-1">
                {title}<a href="#" className="text-sky-600 text-left text-lg pl-4">{anchor}</a>
            </h2>
        </div>
    );
};
