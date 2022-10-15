import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const Language = ({ name, img, options }) => {
  const [desc, setDesc] = useState(false);
  console.log(desc);

  return (
    <Container
      style={{ background: "peachpuff" }}
      className="m-2 rounded-4 p-2 lang-card"
      onClick={() => setDesc(!desc)}
    >
      {desc && (
        <>
          <h3 className="display-5">{name}</h3>
          <Image className="lang-logo" src={img} width="60%"></Image>
        </>
      )}
      {!desc && (
        <ul className="h-100 d-felx flex-column justify-content-center">
          {options.map((item, index) => {
            return (
              <li className="text-start h5" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
