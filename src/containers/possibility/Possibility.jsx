/* Import React and the possibility image */
import React from 'react';
import possibility0Image from '../../assets/possibility0.png';

/* Import the CSS file for the possibility component */
import './possibility.css';

/* Define the possibility component as a function */
const Possibility = () => (
  /* Use a div element with the tech__possibility and section__padding classes as the container */
  <div className="tech__possibility section__padding" id="possibility">
   { /* Use a div element with the tech__possibility-image class to display the image */}
    <div className="tech__possibility-image">
      {/* Use an img element with the src attribute set to the possibility image and the alt attribute set to "possibility" */}
      <img src={possibility0Image} alt="possibility" />
    </div>
    {/* Use a div element with the tech__possibility-content class to display the content */}
    <div className="tech__possibility-content">
      {/* Use an h4 element to display the request for early access */}
      <h4>Request Early Access to Get Started</h4>
      {/* Use an h1 element with the gradient__text class to display the main heading */}
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      {/* Use a p element to display the paragraph */}
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      {/* Use another h4 element to repeat the request for early access */}
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

/* Export the possibility component as the default export */
export default Possibility;
