import { Employee } from "../types/Employee"; 

type EmployeeTableProps = {
  searchQuery: string;
  employees: Employee[];
};

export default function EmployeeTable({ searchQuery, employees }: EmployeeTableProps) {
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
