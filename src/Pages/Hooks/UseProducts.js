import { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://thawing-waters-08691.herokuapp.com/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
}
export default UseProducts;