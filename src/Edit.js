import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "./UserReducer";

const Edit = () => {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id);
  const {name, email} = existingUser[0];
  const [uname,setUName] = useState(name);
  const [uemail, setUEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/');
  }
  
  return(
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Edit User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" placeholder="enter name" value={uname} onChange={e => setUName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">email:</label>
            <input type="email" name="email" className="form-control" placeholder="enter email" value={uemail} onChange={e => setUEmail(e.target.value)}/>
          </div>
          <br />
          <button className="btn btn-info">Done</button>
        </form>
      </div>
    </div>
  )
}

export default Edit;