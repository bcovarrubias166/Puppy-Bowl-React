import { deletePlayerById } from "../API"; // Import appropriate API function

const DeletePlayer = ({ playerId, onDelete }) => {
  const handleDelete = async () => {
    const response = await deletePlayerById(playerId);
    if (response.success) {
      onDelete(playerId); // Update the state to remove the deleted player
    } else {
      console.error("Error deleting player:", response.error.message);
    }
  };

  return (
    <button className="deleteButton" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeletePlayer;