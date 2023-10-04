import WeatherContext from "../../../store/weather-context";
import { MaterialIcon } from "../../../utils/MaterialIcon";
import { CloseButtonStyled } from "../SideWindow.styled";
import { useContext } from "react";

const CloseButton = () => {
  const { setIsSearch, setError } = useContext(WeatherContext);

  const handleClose = () => {
    setError("");
    setIsSearch(false);
  };

  return (
    <CloseButtonStyled onClick={handleClose}>
      <MaterialIcon name="close" visible={true} fontSize={window.innerWidth > 450 ? "20px" : "32px"} />
    </CloseButtonStyled>
  );
};

export default CloseButton;
