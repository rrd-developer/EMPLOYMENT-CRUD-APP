import "./styles.css";
import { useState } from "react";

export default function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [employee, setEmployee] = useState([]);

  const addEmployee = () => {
    console.log(id, name, role);
    setEmployee([...employee, { id: id, name: name, role: role }]);
    setId("");
    setName("");
    setRole("");
  };

  const deleteAll = () => {
    setEmployee([]);
  };

  const delIndi = (id) => {
    const newEmp = employee.filter((emp) => emp.id !== id);
    setEmployee(newEmp);
  };
  return (
    <div className="App">
      <h1>EMPLOYEE MANAGEMENT</h1>
      <div className="form">
        <input
          type="text"
          placeholder="ENTER ID..."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ENTER NAME..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ENTER ROLE..."
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <br />
        <br />
        <button onClick={addEmployee}>ADD</button>
        <br />
        <br />
        <button onClick={deleteAll}>DELETE ALL</button>
      </div>

      {employee.map((emp, i) => {
        return (
          <div key={i}>
            {emp.id} {emp.name} {emp.role}{" "}
            <button onClick={() => delIndi(emp.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}
