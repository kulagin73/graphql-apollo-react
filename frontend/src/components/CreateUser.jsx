import { useState } from "react"
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../query/userQuery";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {

    const [Name,setName] = useState('');
    const [Surname,setSurname] = useState('');
    const [Age,setAge] = useState(0);
    const navigate = useNavigate();

    const [newUser] = useMutation(CREATE_USER);

    const addUser = (e) => {
        e.preventDefault();
        
        newUser({
            variables : {
                input: {
                    Name,Surname,Age
                }
            }
        }).then(({data}) => {
            if(data) {
                navigate(`/users`);
            }
        })
    }

    return (
        <form>
            <label>
                <span>Имя</span>
                <input value={Name} onChange={(e) => setName(e.target.value)} type="text" name="Name" />
            </label>
            <label>
                <span>Фамилия</span>
                <input value={Surname} onChange={(e) => setSurname(e.target.value)}  type="text"  name="Surname" />
            </label>
            <label>
                <span>Возраст</span>
                <input value={Age} onChange={(e) => setAge(parseInt(e.target.value))}  type="text"  name="Age" />
            </label>
            <button type="submit" onClick={(e) => addUser(e)}>Создать</button>
        </form>
    )
}