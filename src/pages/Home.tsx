import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header />
      <main>
        <div className="container">
            <div className="row-space-bettween">
              <h1>Funcionários</h1>
              <SearchBar onSearch={setSearchQuery} />
            </div>
            <EmployeeTable searchQuery={searchQuery} />
        </div>
      </main>
    </>
  );
}
