import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenre() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Create Genre</h2>
      <Button onClick={() => navigate("/genres")}>Save Changes</Button>
    </>
  );
}
