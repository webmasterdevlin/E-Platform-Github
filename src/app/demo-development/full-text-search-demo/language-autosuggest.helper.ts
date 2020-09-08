/* Teach Autosuggest how to calculate suggestions for any given input value. */
import { LanguageModel } from './langauge.model';

const fakeCloudSearchService = (value, data: LanguageModel[]) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : data.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue,
      );
};

/* When suggestion is clicked, Autosuggest needs to populate the input
based on the clicked suggestion. Teach Autosuggest how to calculate the
input value for every given suggestion.
name is the property of the object you want to use for searching */
const getSuggestionValue = suggestion => suggestion.name;

export { fakeCloudSearchService, getSuggestionValue };
