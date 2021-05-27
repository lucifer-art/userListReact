import {useState} from 'react';
import Card from '../UI/Cards/Card';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';
import './AddUser.css'

const AddUser = props => {

    const [enteredUserName,setEnteredUsername]= useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();

    const changeUsernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const changeAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event)=> {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if(Number(enteredAge) < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.getUser(enteredUserName,enteredAge);
        setEnteredUsername('');
        setEnteredAge('')
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <Modal title={error.title} message={error.message} click={errorHandler} />}
            <Card>
                <form className="input" onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={enteredUserName} type="text" placeholder="Username" onChange={changeUsernameHandler} />
                    <label htmlFor="age">Age (in years)</label>
                    <input id="age" step="0" value={enteredAge} type="number" placeholder="Age" onChange={changeAgeHandler} />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;