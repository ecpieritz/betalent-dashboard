import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import EmployeeTable from '../components/EmployeeTable';

const HomePage = () => {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <EmployeeTable />
        </div>
    );
}

export default HomePage;
