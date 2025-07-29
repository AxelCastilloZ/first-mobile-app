export async function getLatestGames() {
  const API_URL = "https://www.freetogame.com/api/games";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const items = await response.json();

    return items.slice(0, 20).map((item) => {
      return {
        title: item.title,
        description: item.short_description,
        releaseDate: item.release_date,
        image: item.thumbnail,
        slug: item.id.toString(),
        score: 80, 
      };
    });
  } catch (error) {
    console.error("❗ Error en getLatestGames:", error.message);
    return [];
  }
}
