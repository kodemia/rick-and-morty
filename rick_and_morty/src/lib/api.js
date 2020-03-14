// Returns the characters count for use in the first load
async function getCharacterCount() {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const { info } = await response.json();
  return info.count;
}

// Returns one character data for use in individual components
async function getCharacterById(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.json();
}

async function getAllCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  return response.json();
}

// returns all characters iterative
// async function getAllCharacters() {
//   const { info, results } = await rickmortyapi.getCharacter()
//   let characters = [
//     ...results
//   ]

//   for (let i = 2; i <= info.pages; i++) {
//     console.log('Voy en', i)
//     const { results } = await rickmortyapi.getCharacter({ page: i })
//     characters = [
//       ...characters,
//       ...results
//     ]
//   }

//   return characters
// }

// // returns all characters recursively
// async function getCharactersFromPage(pageNumber = 1) {
//   let characters = []
//   const { info, results } = await rickmortyapi.getCharacter({ page: pageNumber })

//   if (info.next !== '') {
//     characters = await getCharactersFromPage(pageNumber + 1)
//   }

//   return [
//     ...characters,
//     ...results
//   ]
// }

module.exports = {
  getCharacterCount,
  getCharacterById,
  getAllCharacters
  // getCharactersFromPage
};
