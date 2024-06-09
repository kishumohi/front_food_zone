import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult.jsx";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchfoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const fooddata = await response.json();
        console.log(fooddata);
        setData(fooddata);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data");
      }
    };

    fetchfoodData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <TopContainer>
        <img src="Foody Zone.svg" alt="logo" />
        <input type="text" placeholder="Search" />
      </TopContainer>
      <FilterContainer>
        <div>
          <button>All</button>
          <button>Breackfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </div>
      </FilterContainer>
      <SearchResult data={data} />
    </div>
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
