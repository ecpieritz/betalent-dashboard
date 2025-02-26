import { useState } from "react";
import { Employee } from "../types/Employee";
import arrowUp from "../assets/images/arrow-up.png";
import arrowDown from "../assets/images/arrow-down.png";
import dot from "../assets/images/dot.png";

interface EmployeeTableMobileProps {
  employees: Employee[];
  searchQuery: string;
}

const EmployeeTableMobile: React.FC<EmployeeTableMobileProps> = ({
  employees,
  searchQuery,
}) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Filtra os funcionários com base no searchQuery
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="employeeTableMobile">
      <div className="accordion-titles">
        <div className="accordion-titles__text">
          <p id="photo">FOTO</p>
          <p id="name">NOME</p>
        </div>

        <img src={dot} alt="Dot" className="accordion-titles__dot" />
      </div>
      {filteredEmployees.map((employee) => (
        <div key={employee.id} className="accordion">
          <button
            onClick={() => toggleAccordion(employee.id)}
            className="accordion__button"
          >
            <img
              src={employee.image}
              alt={employee.name}
              className="accordion__button__image"
            />
            <span>{employee.name}</span>
            <img
              src={openId === employee.id ? arrowUp : arrowDown}
              alt="Toggle"
              className="accordion__button__icon"
            />
          </button>
          {openId === employee.id && (
            <div className="accordion__content">
              <div className="accordion__content__item">
                <p>
                  <strong>Cargo</strong>
                </p>
                <p>{employee.job}</p>
              </div>

              <div className="accordion__content__item">
                <p>
                  <strong>Admissão</strong>
                </p>
                <p>{new Date(employee.admission_date).toLocaleDateString()}</p>
              </div>

              <div className="accordion__content__item">
                <p>
                  <strong>Telefone</strong>
                </p>
                <p>{employee.phone}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmployeeTableMobile;
