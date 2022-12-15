import i18n from '../../../i18n';
import {movies_en_CA} from "./en_CA";
import {movies_fr_CA} from "./fr_CA";

i18n.addResourceBundle('en_CA', 'movies', movies_en_CA);
i18n.addResourceBundle('fr_CA', 'movies', movies_fr_CA);
i18n.loadNamespaces('movies');
