import React from "react";

//Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h3>{title}</h3>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
