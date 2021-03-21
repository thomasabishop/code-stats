import React from 'react';
import './Page.scss';

function Page(props) {
  return (
    <React.Fragment>
      <div className="Page">{props.children}</div>
    </React.Fragment>
  );
}

export default Page;
