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
