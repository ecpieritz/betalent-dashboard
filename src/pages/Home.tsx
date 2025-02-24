import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import EmployeeTable from '../components/EmployeeTable';

const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <div className="container">
                <SearchBar />
                <EmployeeTable />
            </div>
        </div>
    );
}

export default HomePage;
