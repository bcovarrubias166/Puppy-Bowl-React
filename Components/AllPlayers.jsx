import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import DeletePlayer from "./DeletePlayer.jsx"; // Import the DeletePlayer component
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPlayers() {
      const APIData = await fetchAllPlayers();
      if (APIData.success) {
        setPlayers(APIData.data.players);
      } else {
        setError(APIData.error.message);
      }
    }
    getAllPlayers();
  }, []);

  const playersToDisplay = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam)
      )
    : players;

  const handlePlayerDelete = (playerId) => {
    setPlayers(players.filter((player) => player.id !== playerId));
  };


  return (
    <>
      <div>
        <label>
          Search
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </label>
      </div>

      {playersToDisplay.map((player) => (
        <div key={player.id} className="card">
          <h3>{player.name}</h3>
          <img src={player.imageUrl} alt={player.name} width="200"/>
          <div className="seedetails">
            <button className="details" onClick={() => navigate(`/${player.id}`)}>
              See Details
            </button>
          </div>
          <DeletePlayer playerId={player.id} onDelete={handlePlayerDelete} />
        </div>
      ))}
    </>
  );
}