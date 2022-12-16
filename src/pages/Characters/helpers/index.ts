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
    hair_color: character.hair_color,
    eye_color: character.eye_color,
    birth_year: character.birth_year,
    num_of_movies: character.films.length,
  }));
}
