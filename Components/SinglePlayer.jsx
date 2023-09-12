import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";

export default function SinglePlayer() {
  let { id } = useParams();
  const [player, setPlayer] = useState([]);
  const [error, setError] = useState(null);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    async function getSinglePlayer() {
      const APIData = await fetchSinglePlayer(id);
      if (APIData.success) {
        setPlayer(APIData.data.player);
      } else {
        setError(APIData.error.message);
      }
    }
    getSinglePlayer();
  }, [id]);

  return (
    <>
      <h2>Player Details</h2>
      <div>
        {player && (
          <div>
            <h3>{player.name}</h3>
            <img src={player.imageUrl} alt={player.name} width="200" />
            <h4>Breed: {player.breed}</h4>
            <h4>Status: {player.status}</h4>
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}