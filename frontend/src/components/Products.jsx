import { GET_ALL_PRODUCTS,DELETE_PRODUCT } from "../query/productQuery"
import { useState, useEffect  } from "react"
import { useQuery,useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

export const Products = () => {
    const [prosucts, setProducts] = useState([]);
    const {data,loading,error, refetch: refetchAllProducts } = useQuery(GET_ALL_PRODUCTS, {
        fetchPolicy: 'no-cache',
    })

    const [delProduct] = useMutation(DELETE_PRODUCT);

    useEffect(() => {
        if(!loading) {
            setProducts(data.getAllProducts);
        }
    },[data])

    const deleteProduct = (id) => {
        delProduct({
            variables: {
                Id: parseInt(id)
            }
        }).then((res) => {
            if (res.data) {
                refetchAllProducts()
            }
        })
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            {
                prosucts.map(product => {
                    return <div key={product.Id}>
                        <Link to={`/product/${product.Id}`}>
                            <span>{product.ProductName}</span>
                            <span>{product.ProductPrice}</span>
                        </Link>
                       <button onClick={() => deleteProduct(product.Id)}>Удалить</button>
                    </div>
                })
            }
            <Link to={`/createproduct`}>Создать</Link>
        </div>
    )
}