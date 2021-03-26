import styled from 'styled-components';
import TSLogo from '../img/typescript-logo.svg';
import ReactLogo from '../img/react-logo.svg';

const Wrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 14px;
  /* text-transform: uppercase; */
  //font-weight: 300;
  //letter-spacing: 0.08rem;
  /*border: 1px solid black;*/
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 1rem;
`;

function Footer() {
  return (
    <Wrapper>
      <span>Built with:</span>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.typescriptlang.org/"
        >
          <Icon alt="TypeScript logo" src={TSLogo} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
          <Icon alt="React.js logo" src={ReactLogo} />
        </a>
      </div>
    </Wrapper>
  );
}

export default Footer;
