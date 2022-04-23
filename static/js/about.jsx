'use strict';

function About() {
  // A component can only render one argument so wrap multi-lines in ()
  // Note: All tags need to be closed in JSX
  return (
    <div>
      <p>Hi, I'm Luna Lam!</p>
      <a href="https://github.com/lunaxlam">You can view my GitHub link here.</a><br/>   
      <img src="/static/img/lunalam.jpg"/> 
    </div>
  );
}

// Required parameters are (< Component to render />, and the DOM element to mount the content which we can access by the querySelector())
ReactDOM.render(<About />, document.querySelector('#about'));