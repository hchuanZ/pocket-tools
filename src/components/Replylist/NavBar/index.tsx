import { NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";
export default function MyNavBar () {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div>
      <NavBar onBack={back}>标题</NavBar>
    </div>
  );
}
