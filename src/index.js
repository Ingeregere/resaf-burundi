import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css';
import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import { Spinner } from 'react-bootstrap';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en','fr'],
    fallbackLng: "en",
    detection: {
        order: [ 'cookie','path', 'htmlTag', 'localStorage', 'subdomain'],
        caches: ['cookie']
    },
    backend: {
        loadPath: 'assets/locales/{{lng}}/translation.json'
    },
  });
 
  const loadingMarkup = (
    <div className={'py-4 text-center'}>
      <Spinner animation="grow" variant="success" ><span style={{position: 'absolute',marginTop: '2em',marginLeft:'-5em',width:'10em'}}>Resaf-Burundi</span></Spinner>
    </div>
  )




 const root =ReactDOM.createRoot (document.getElementById('root'));
 root.render( <Suspense fallback={loadingMarkup}> <App /></Suspense>);
