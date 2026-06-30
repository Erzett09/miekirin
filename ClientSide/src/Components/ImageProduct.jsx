
// import '../assets/css/image_product.css'

export default function ImageProduct(props) {
    return (
        <div className="wrapper-image">
            <img src={props.src} className="image" alt="product-image"/>
        </div>
    )
}