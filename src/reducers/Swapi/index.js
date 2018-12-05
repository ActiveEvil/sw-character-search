import {
  RECEIVE_CHARACTER_DATA,
  SEARCH_CHARACTER_DATA,
} from '../../actions/Swapi';

const Swapi = (state = {
  isFetching: true,
  characters: [],
  search: '',
  characterMatches: [],
}, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_DATA: {
      return Object.assign({}, state, {
        isFetching: false,
        characters: action.characters,
      });
    }
    case SEARCH_CHARACTER_DATA: {
      let characterMatches = [];

      if (action.search.length) {
        characterMatches = state.characters.filter(character => character.name.toLowerCase().includes(action.search.toLowerCase()));
      }

      return Object.assign({}, state, {
        search: action.search,
        characterMatches,
      });
    }
    default:
      return state;
  }
};

export default Swapi;
