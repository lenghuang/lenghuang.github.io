import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import fav16 from '../images/favicon_io/favicon-16x16.png';
import fav32 from '../images/favicon_io/favicon-32x32.png';
import favAppleTouch from '../images/favicon_io/apple-touch-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, preview } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <link rel="apple-touch-icon" sizes="180x180" href={favAppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
        <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={preview} />
      </Helmet>
      <App />
    </>
  );
};
