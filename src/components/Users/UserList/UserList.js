import './UserList.css';
import Card from '../../UI/Cards/Card';

const UserList = props => {
    console.log(props);
    return <Card>
        <ul className="user">
            {props.userData.map((user,index) => {
                return <li key={index}>{user.username} ({user.age} years!)</li>
            })}
        </ul>
    </Card>
}
export default UserList;