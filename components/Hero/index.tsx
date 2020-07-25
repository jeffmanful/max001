import { Title } from "./styled";

const Hero = ({ title, subtitle }): JSX.Element => {
  return (
    <>
      <Title>{title}</Title>
      <p>{subtitle}</p>
    </>
  );
};

export default Hero;
