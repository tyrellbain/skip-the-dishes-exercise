import { BREAKPOINTS } from '../../../theme';

export function shortenLanguage(language: string, width: number) {
  if (width <= BREAKPOINTS.md) {
    return language.substr(0, 2);
  }
  return language;
}
