import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import data from './language.data';
import { LanguageModel } from './langauge.model';
import {
  fakeCloudSearchService,
  getSuggestionValue,
} from './language-autosuggest.helper';

import { Box } from '@material-ui/core';
import InputWithSearchIconFormik from '../../components/input-with-search-icon-formik';

type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
};
const LanguagesAutosuggest: React.FC<Props> = ({ setFieldValue }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<Array<LanguageModel>>([]);

  const inputProps = {
    value: value,
    onChange: (event, { newValue }) => {
      setValue(newValue);
    },
  };

  /* Autosuggest will call this function every time you need to update suggestions. */
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(fakeCloudSearchService(value, data.languages));
  };

  /* Autosuggest will call this function every time you need to clear suggestions. */
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  return (
    <>
      <Autosuggest
        onSuggestionSelected={(event, { suggestion, method }) => {
          if (method === 'enter') {
            event.preventDefault();
          }
          setValue(suggestion.name);
          setFieldValue('offering', suggestion.name);
        }}
        suggestions={suggestions}
        inputProps={inputProps}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={suggestion => (
          // Use your imagination to render suggestions.
          <Box
            color={'#222'}
          >{`${suggestion?.name} since ${suggestion?.year}`}</Box>
        )}
        renderInputComponent={inputProps => {
          return <InputWithSearchIconFormik inputProps={inputProps} />;
        }}
      />
    </>
  );
};

export default LanguagesAutosuggest;
