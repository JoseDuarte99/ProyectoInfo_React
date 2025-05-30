

// TIPADO DE PRODUCT-CARD
type ProductCardProps = {
    img: string;
    title: string;
    previousPrice?: number;
    price: number;
    priceInfo?: string;
    shippingInfo?: string;
};

// TIPADO DE TITLE-SECTION
type TitleSectionProps = {
    title: string;
    link?: string;
};

// TIPADO DE SECTION
type SectionProps = {
    titleSection: React.ReactNode;
    children: React.ReactNode;
};

// COMPONENTE PRODUCT-CARD
export function ProductCard(props: ProductCardProps) {
    const { img, title,previousPrice, price, priceInfo, shippingInfo } = props
    
    return (
        <div className=" pl-2 pr-2 pb-2">
        <a href="#">
        <img width={250} height={250} src={img} alt={title} />
        <h3 className="text-neutral-700 text-left text-medium mb-4">
        {title}
        </h3>
        <p className="text-neutral-500 text-left text-xs line-through">
        {previousPrice !== undefined ? `$${previousPrice}` : ""}
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
        </a>
        </div>
    );
};

// COMPONENTE TITLE-SECTION
export function TitleSection(props: TitleSectionProps) {
    const {title, link} = props
    
    return (
        <div className="pl-2">
        <h2  className="text-black text-left text-3xl font-medium pt-1">
        {title}<a href="#" className="text-red-600 text-left text-sm pl-4">{link}</a>
        </h2>
        </div>
    );
};

// COMPONENTE SECTION
export function Section(props: SectionProps) {
    const { titleSection, children} = props
    return (
        <div className=" bg-white p-2 m-10 rounded-lg shadow-gray-300 shadow-lg ">
        <>{titleSection}</>
        <div className="flex">
        {children}
        </div>
        </div>
    );
};


// COMPONETE SEARCH
// export function Search(){
    
//     return(
//         <>
//         <input className=" bg-white text-lg text-gray-700 shadow-gray-500 shadow-sm placeholder-gray-600 pl-4 ml-10 w-150 h-12 outline-none outline-blue-500 " type="search" placeholder="Buscar productos, marcas y más…" />
//         </>
//     );
// };

export function Search(){
    return(
        <div className="flex items-center bg-white shadow-gray-500 shadow-sm rounded-md">
            <input 
                className="text-lg text-gray-700 placeholder-gray-600 pl-4 w-150 h-12 outline-none" 
                type="search" 
                placeholder="Buscar productos, marcas y más…" 
            />
        </div>
    );
}

// COMPONETE NAVBAR
export function Navbar(){
    
    return(
        
        <><p className="text-xl text-black" >Botones</p></>
    );
};





