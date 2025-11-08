"use client";

import { Keyquence } from "react-keyquence";

const KeyquenceComponent = () => {
  return (
    <>
      <Keyquence
        sequences={[
          {
            keys: "hello",
            onDetect: () => {
              console.log('User typed "hello"!');
              alert("Hello detected!");
            },
          },
          {
            keys: "ironman",
            onDetect: () => {},
            audioPath: "/audio/iron-man-repulsor.mp3",
          },
        ]}
      />
    </>
  );
};

export default KeyquenceComponent;
