import { Link } from "react-router-dom"

export const Root = () => {
    return (
        <div>
            <Link to={`/users`}>Юзеры</Link>
            <Link to={`/products`}>Товары</Link>
        </div>
    )
}