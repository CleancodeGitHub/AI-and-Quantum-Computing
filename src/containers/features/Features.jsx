import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

// Data containing features with titles and corresponding texts
const featuresData = [
  {
    title: 'AI-Powered Transformations',
    text: 'Embark on a journey of AI-powered innovations. From fine-tuning algorithms to drawing insights, our technology, like a fine-tuned quantum machine, instantly transforms the landscape of possibilities.',
  },
  {
    title: 'Quantum Leap into Active Learning',
    text: 'Considered sympathize with the tenets of active learning? Uncommonly occasional assistance is not just sufficient but crucial. Letters of becoming tend to activate quantum leaps into a future of boundless knowledge.',
  },
  {
    title: 'Messaging with Quantum Precision',
    text: 'Led by the ask of possible mistress Quantum Relation, we dance with elegance, eat data likewise, and engage in quantum-level debating. Our messages are nothing short of an address to the future of computing.',
  },
  {
    title: 'Law County in the Realm of Quantum Reality',
    text: 'In the county of really advanced technologies, she, unable to remain passive, takes quantum leaps alongside her sister. Every step is like a quantum six, leaving behind traditional laws. In this built table of quantum reality, rapid blushes are the norm.',
  },
];

const Features = () => (
  // Main features section container
  <div className="tech__features section__padding" id="features">
    {/* Heading section with a title and a call-to-action */}
    <div className="tech__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into the Quantum Future Today. & Make it AI Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>

    {/* Container for individual features, using the Feature component */}
    <div className="tech__features-container">
      {featuresData.map((item, index) => (
        // Feature component instance for each feature
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
