'use strict';

function Homepage() {
  // A component can only render one argument so wrap multi-lines in ()
  // Note: All tags need to be closed in JSX
  return (
    <div>
      <p>This is a great site for viewing trading cards.</p>
      <a href="/cards">Click here to view the trading cards.</a><br/>   
      <a href="/about">Click here to learn about Luna Lam.</a><br/>   
      <img src="/static/img/balloonicorn.jpg"/> 
    </div>
  );
}

// Required parameters are (< Component to render />, and the DOM element to mount the content which we can access by the querySelector())
ReactDOM.render(<Homepage />, document.querySelector('#app'));
