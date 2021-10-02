import React from 'react';

const greetingsStyle = {
    border: 'solid',
    borderWidth: '2px',
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'center',
    margin: '10px',
};

// IN A FUNCTION WE DO NOT USE THISSSSS
function Greetings(props) {
    const {lang, children } = props; // just so we understand but better to use the destructuring in the first line
  return (
    <div style={greetingsStyle}>
      { lang === "de" && <h6>Hallo {children}</h6>}
      { lang === "fr" && <h6>Bonjour {children} </h6>}
      { lang === "en" && <h6>Hey there, {children} </h6>}
      { lang === "es" && <h6>Hola {children} </h6>}
    </div>
  );
}

export default Greetings;

// - `lang`: A string that could be ,`"de"`,`"en"`,`"es"`,`"fr"`
// - `children`: A text

// **Example**
// ```js
// <Greetings lang="de">Ludwig</Greetings>
// <Greetings lang="fr">François</Greetings>
// ```