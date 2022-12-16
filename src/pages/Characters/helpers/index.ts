import { CharacterResonse } from '../../../services/API/swapi';
import { Character } from '../components/CharacterCard';

export function mapResponseToState(
  characterResponses: CharacterResonse[],
): Character[] {
  return characterResponses.map((character) => ({
    name: character.name,
    gender: character.gender,
    height: parseInt(character.height),
    weight: parseInt(character.mass),
    hairColor: character.hair_color,
    eyeColor: character.eye_color,
    birthYear: character.birth_year,
    numOfMovies: character.films.length,
  }));
}

export function sortByName(a: Character, b: Character): number {
  const nameA = a.name.toLocaleLowerCase();
  const nameB = b.name.toLocaleLowerCase();

  if (nameA > nameB) {
    return 1;
  }

  return -1;
}

export function sortByNumOfMovies(a: Character, b: Character): number {
  if (a.numOfMovies > b.numOfMovies) {
    return 1;
  }
  return -1;
}

export function sortByHeight(a: Character, b: Character): number {
  if (a.height > b.height) {
    return 1;
  }

  return -1;
}
