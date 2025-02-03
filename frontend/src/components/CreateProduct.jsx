import { useMutation } from "@apollo/client"
import { CREATE_PRODUCT } from "../query/productQuery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {

    const [newProduct] = useMutation(CREATE_PRODUCT);
    const [product, setProduct] = useState({ProductName:"",ProductDescription:"",ProductPrice:"",ProductCount:0});
    const navigate = useNavigate();

    const addProduct = (e) => {
        e.preventDefault();

        newProduct({
            variables:{
                input:product
            }
        }).then(({data}) => {
            if(data) {
                navigate(`/products`);
            }
        })
    }

    return (
        <form>
            <label>
                <span>Название</span>
                <input value={product.ProductName} onChange={(e) => setProduct({...product,ProductName:e.target.value})}  type="text"  name="ProductName" />
            </label>
            <label>
                <span>Описание</span>
                <input value={product.ProductDescription} onChange={(e) => setProduct({...product,ProductDescription:e.target.value})}  type="text"  name="ProductDescription" />
            </label>
            <label>
                <span>Цена</span>
                <input value={product.ProductPrice} onChange={(e) => setProduct({...product,ProductPrice:e.target.value})}  type="text"  name="ProductPrice" />
            </label>
            <label>
                <span>Количество</span>
                <input value={product.ProductCount} onChange={(e) => setProduct({...product,ProductCount: parseInt(e.target.value)})}  type="text"  name="ProductCount" />
            </label>
            <button type="submit" onClick={(e) => addProduct(e)}>Создать</button>
        </form>
    )
}