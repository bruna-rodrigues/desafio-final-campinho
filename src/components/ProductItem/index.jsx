import './styles.css'

export const ProductItem = ({ id, image, title, price }) => {
    return (
        <div className='ProductItem' key={id}>
            <img src={image} />
            <p>{title}</p>
            <p>Preço: {price}</p>
        </div>
    )
}