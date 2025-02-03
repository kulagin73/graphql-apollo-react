import { useEffect,useState } from "react"
import { useQuery,useMutation } from "@apollo/client"
import { GET_PRODUCT,DELETE_PRODUCT,UPDATE_PRODUCT } from "../query/productQuery"
import { useNavigate,useParams } from "react-router-dom"

export const Product = () => {
    const {id} = useParams();
    const [formState,setFormState] = useState(true);
    const [product, setProduct] = useState({});
    const {data,loading,error, refetch: refetchProduct } = useQuery(GET_PRODUCT, {
        variables: {Id : parseInt(id)},
        fetchPolicy: 'no-cache',
    })

    const navigate = useNavigate();

    const [updProduct] = useMutation(UPDATE_PRODUCT);
    const [delProduct] = useMutation(DELETE_PRODUCT);

    useEffect(() => {
        if(!loading) {
            setProduct({...data.getProductById});
        }
    },[data])

    const changeFormState = () => {
        setFormState(!formState);
    }

    const updateProduct = (e) => {
        e.preventDefault();
        const {__typename:_, ...productFieldForUpdate} = product
        updProduct({
            variables: {
                input: productFieldForUpdate,
            }
        }).then(({data}) => {
            if(data) {
                navigate(`/products`);
            }
        })
    }

    const deleteProduct = (id) => {
        delProduct({
            variables: {
                Id: parseInt(id)
            }
        }).then((res) => {
            if (res.data) {
                navigate(`/products`);
            }
        })
    }

    return (
        <form>
            <label>
                <span>Название</span>
                <input readOnly={formState} value={product.ProductName} onChange={(e) => setProduct({...product,ProductName:e.target.value})}  type="text"  name="ProductName" />
            </label>
            <label>
                <span>Описание</span>
                <input readOnly={formState} value={product.ProductDescription} onChange={(e) => setProduct({...product,ProductDescription:e.target.value})}  type="text"  name="ProductDescription" />
            </label>
            <label>
                <span>Цена</span>
                <input readOnly={formState} value={product.ProductPrice} onChange={(e) => setProduct({...product,ProductPrice:e.target.value})}  type="text"  name="ProductPrice" />
            </label>
            <label>
                <span>Количество</span>
                <input readOnly={formState} value={product.ProductCount} onChange={(e) => setProduct({...product,ProductCount: parseInt(e.target.value)})}  type="text"  name="ProductCount" />
            </label>
            <button type="button" onClick={changeFormState}>Изменить</button>
            <button disabled={formState} onClick={(e) => deleteProduct(e,product.Id)}>Удалить</button>
            <button disabled={formState} type="submit" onClick={(e) => updateProduct(e)}>Сохранить</button>
        </form>
    )
}