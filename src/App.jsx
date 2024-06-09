import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult.jsx";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  // console.log(filteredData);
  const BASE_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
  useEffect(() => {
    const fetchfoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const fooddata = await response.json();
        const finalFood = await fooddata.categories?.slice(0, 6);
        // console.log(finalFood);
        setData(finalFood);
        setFilteredData(finalFood);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data");
      }
    };

    fetchfoodData();
  }, []);

  // Filter Function
  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.strCategory.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <TopContainer>
          <img src="Foody Zone.svg" alt="logo" />
          <input type="text" placeholder="Search" onChange={searchFood} />
        </TopContainer>
        <FilterContainer>
          <div>
            <button>All</button>
            <button>Breackfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
          </div>
        </FilterContainer>
      </div>
      <SearchResult data={filteredData} />
    </>
  );
}

export default App;

const TopContainer = styled.section`
  background-color: #323334;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    max-width: 285px;
    border: 1px solid red;
    border-radius: 5px;
    padding: 12px;
    background-color: transparent;
    color: white;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: #323334;
  padding-bottom: 40px;
  button {
    margin: 0 14px;
    padding: 6px 12px;
    background-color: #ff4343;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #f22f2f;
    }
  }
`;
