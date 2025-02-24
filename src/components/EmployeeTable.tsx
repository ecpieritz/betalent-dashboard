import { useEffect, useState } from "react";
import axios from "axios";

type Employee = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

type EmployeeTableProps = {
  searchQuery: string;
};

export default function EmployeeTable({ searchQuery }: EmployeeTableProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th>CARGO</th>
          <th>DATA DE ADMISSÃO</th>
          <th>TELEFONE</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee) => (
          <tr key={employee.id}>
            <td>
              <img src={employee.image} alt={employee.name} />
            </td>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>{new Date(employee.admission_date).toLocaleDateString()}</td>
            <td>{employee.phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
