import styled from "styled-components";

function SearchResult({ data }) {
  return (
    <FoodCartContainer>
      <FoodCards>
        {data?.map((food) => (
          <FoodCart key={food.id}>
            <div className="food_image">
              <img src={food.url} width={133} height={133} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{food.id}</h3>
                <p>{food.title}</p>
              </div>
              <button>click To Buy</button>
            </div>
          </FoodCart>
        ))}
      </FoodCards>
    </FoodCartContainer>
  );
}

export default SearchResult;

const FoodCartContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
  background-color: #323334;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCart = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;
