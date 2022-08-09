import { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([])
    const [pdLoading, setPdLoading] = useState(true)
    useEffect(() => {
        fetch("https://thawing-waters-08691.herokuapp.com/product")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setPdLoading(false)

            })
    }, [])
    return [products, pdLoading]
}
export default UseProducts;