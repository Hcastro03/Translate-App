import React, { useState, useEffect, useCallback } from 'react';
import LanguageSelector from './components/LanguajeSelector';
import TextInput from './components/TextInput';
import TranslationOutput from './components/TranslationOutput';
import TranslateButton from './components/TranslateButtton';
import CopyButton from './components/CopyButton';
import TextToSpeechButton from './components/TextToSpeechButton';
import axios from 'axios';
import { debounce } from 'lodash';

const languages = [
  { code: 'auto', name: 'Detect Language' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
];

const App = () => {
  const [text, setText] = useState('Hello, how are you?');
  const [translation, setTranslation] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('fr');

  const translateText = async () => {
    try {
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text,
          langpair: `${sourceLang}|${targetLang}`,
        },
      });
      setTranslation(response.data.responseData.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const debouncedTranslate = useCallback(debounce(translateText, 500), [text, sourceLang, targetLang]);

  useEffect(() => {
    translateText();
  }, []);

  useEffect(() => {
    if (text.length <= 500) {
      debouncedTranslate();
    }
  }, [text, sourceLang, targetLang, debouncedTranslate]);

  return (
    <div className="app">
      <div className="input-section">
        <LanguageSelector languages={languages} selectedLanguage={sourceLang} onSelectLanguage={setSourceLang} />
        <TextInput text={text} onTextChange={setText} />
        <TextToSpeechButton text={text} />
        <CopyButton text={text} />
      </div>
      <TranslateButton onClick={translateText} />
      <div className="output-section">
        <LanguageSelector languages={languages} selectedLanguage={targetLang} onSelectLanguage={setTargetLang} />
        <TranslationOutput translation={translation} />
        <TextToSpeechButton text={translation} />
        <CopyButton text={translation} />
      </div>
    </div>
  );
};

export default App;
