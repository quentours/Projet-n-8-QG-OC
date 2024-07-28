export const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Erreur dans la récupération des données')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erreur dans le fetch des données:', error)
    throw error
  }
}
