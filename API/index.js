const cohortName = "2305-FTB-ET-WEB-PT";
const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(baseURL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(`${baseURL}/${playerId}`)
    const player = await response.json();
    return player;
  } catch(err) {
    console.error("error");
  }
}

export async function deletePlayerById(playerId) {
  try {
    const response = await fetch(`${baseURL}/${playerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete player");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: { message: error.message } };
  }
}