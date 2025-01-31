import { useState, useEffect } from "react";
import { useQuery ,useMutation} from "@apollo/client";
import { GET_USER, UPDATE_USER,DELETE_USER } from "../query/userQuery";
import { useParams, useNavigate } from "react-router-dom";

export const User = () => {
    const [user, setUser] = useState({});
    const {id} = useParams();
    const [formState,setFormState] = useState(true);
    const {data,loading,error, refetch: refetchUser } = useQuery(GET_USER, {
        variables: {Id : parseInt(id)},
        fetchPolicy: 'no-cache',
    });
    const [UpdateUser] = useMutation(UPDATE_USER);
    const [delUser] = useMutation(DELETE_USER);

    const navigate = useNavigate();

    useEffect(() => {
        if(!loading) {
            setUser({...data.getUserById});
        }
    }, [data]);

    const changeFormState = () => {
        setFormState(!formState);
    }

    const updateUser = (e) => {
        e.preventDefault();
        const {__typename:_, ...userFieldForUpdate} = user
        UpdateUser({
            variables: {
                input: userFieldForUpdate,
            }
        }).then(({data}) => {
            if(data) {
                navigate(`/users`);
            }
        })
    }

    const deleteUser = (e,id) => {
        e.preventDefault();
        
        delUser({
            variables:{
                Id: parseInt(id)
            }
        }).then(({data}) => {
            if(data) {
                navigate(`/users`);
            }
        })
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <form>
             <label>
                <span>Имя</span>
                <input readOnly={formState} value={user.Name} onChange={(e) => setUser({...user, Name: e.target.value})} type="text" name="Name" />
            </label>
            <label>
                <span>Фамилия</span>
                <input readOnly={formState}  value={user.Surname} onChange={(e) => setUser({...user,Surname: e.target.value})}  type="text"  name="Surname" />
            </label>
            <label>
                <span>Возраст</span>
                <input readOnly={formState}  value={user.Age} onChange={(e) => setUser({...user, Age:parseInt( e.target.value)})}  type="text"  name="Age" />
            </label>
            <button type="button" onClick={changeFormState}>Изменить</button>
            <button disabled={formState} onClick={(e) => deleteUser(e,user.Id)}>Удалить</button>
            <button disabled={formState} type="submit" onClick={(e) => updateUser(e)}>Сохранить</button>
        </form>
    )
}