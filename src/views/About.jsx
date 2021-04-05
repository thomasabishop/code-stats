import React from 'react';

function About() {
  return (
    <React.Fragment>
      <p>
        CodeStats is built with{' '}
        <a className="about-links" href="https://reactjs.org">
          React.js
        </a>{' '}
        and hosted with AWS Amplify.
      </p>
      <p>
        The data is dynamic and is sourced from the{' '}
        <a className="about-links" href="https://wakatime.com/">
          WakaTime
        </a>{' '}
        and{' '}
        <a
          className="about-links"
          href="https://docs.github.com/en/rest/reference/users"
        >
          GitHub User
        </a>{' '}
        APIs. WakaTime is a software that hooks into your text editor or IDE and
        records metrics about your coding over time.
      </p>
      <p>
        The source code is available{' '}
        <a
          className="about-links"
          href="https://github.com/thomasabishop/code-stats"
        >
          here
        </a>
        .
      </p>

      <p>
        <a className="about-links" href="https://thomas-bishop.co.uk/">
          Thomas Bishop
        </a>
      </p>
    </React.Fragment>
  );
}

export default About;
