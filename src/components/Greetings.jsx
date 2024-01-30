import React from "react";

// const currentLangHello = {
//   de: "Hallo",
//   fr: "Bonjour",
//   es: "Hola",
//   en: "Hello",
// };

// for (const key in currentLangHello) {
//   console.log(currentLangHello[key]);
// }

const obj = { a: 1, b: 2, c: 3 };
const key = "a";
console.log(obj[key]);

// console.log(obj.a);
// console.log(obj["a"]);
// console.log(obj["b"]);
// console.log(obj["c"]);

const Greetings = ({ lang, children }) => {
  const currentLangHello = {
    de: "Hallo",
    fr: "Bonjour",
    es: "Hola",
    en: "Hello",
  };

  return (
    <div className="box">
      <p>
        {currentLangHello[lang]} <span>{children}</span>
      </p>
    </div>
  );
};

export default Greetings;

// const Greetings = (props) => {
//   // props.lang = "de"
//   const langs = {
//     de: "Hallo",
//     fr: "Bonjour",
//   };

//   console.log(langs[props.lang]);
//   console.log(langs.de);
//   let greeting;
//   switch (props.lang) {
//     case "de":
//       greeting = "Hallo";
//       break;
//     case "fr":
//       greeting = "Bonjour";
//       break;
//     case "en":
//       greeting = "Hello";
//       break;
//     case "es":
//       greeting = "Hola";
//       break;
//     default:
//       greeting = "Hi";
//   }

//   return (
//     <p className="Greeting">
//       {greeting} {props.children}
//     </p>
//   );
// };

// export default Greetings;
