import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeTableMobile from "../components/EmployeeTableMobile";
import { Employee } from "../types/Employee"; // Ajuste o caminho conforme necessário

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row-space-bettween">
            <h1>Funcionários</h1>
            <SearchBar onSearch={setSearchQuery} />
          </div>

          {isMobile ? (
            <EmployeeTableMobile employees={employees} searchQuery={searchQuery} />
          ) : (
            <EmployeeTable employees={employees} searchQuery={searchQuery} />
          )}
        </div>
      </main>
    </>
  );
}
