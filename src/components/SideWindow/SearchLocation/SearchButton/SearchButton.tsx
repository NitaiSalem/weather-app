import { StyledSearchButton } from "./SearchButton.styled";

const SearchButton: React.FC<{ weatherByCity: () => void }> = ({
  weatherByCity,
}) => {
  const searchForCity = () => {
    weatherByCity();
  };

  return (
    <StyledSearchButton onClick={searchForCity}>Search</StyledSearchButton>
  );
};

export default SearchButton;
