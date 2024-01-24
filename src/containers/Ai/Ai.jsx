import React from 'react';
import Feature from '../../components/feature/Feature';
import './ai.css';

const Ai = () => (
  <div className="tech__quantumComputer section__margin" id="wgpt3">
    {/* Feature section with GPT-3 information */}
    <div className="tech__quantumComputer-feature">
      <Feature
        title="Quantum-Computer"
        text="Delve into the world of GPT-3, a masterpiece of artificial intelligence. Opinions, messages, and delights converge in a symphony of knowledge. Witness the impossible becoming possible."
      />
    </div>

    {/* Heading section */}
    <div className="tech__quantumComputer-heading">
      {/* Main heading with AI and Quantum emphasis */}
      <h1 className="gradient__text">Unlocking Boundless Potential: A Journey into AI and Quantum Realms</h1>
      <p>Explore the Library</p>
    </div>

    {/* Features container */}
    <div className="tech__quantumComputer-container">
      {/* Individual features with AI-centric content */}
      <Feature
        title="AI-Driven Chatbots"
        text="Embark on conversations that transcend boundaries. AI-powered chatbots redefine communication, offering delightful and intelligent interactions beyond the ordinary."
      />
      <Feature
        title="Quantum Knowledgebase"
        text="Immerse yourself in a quantum realm of knowledge. Here, ladyship and humanity converge, insisting on the art of impossible. Friendly bachelor entrances lead to a world where information knows no bounds."
      />
      <Feature
        title="Educational Frontiers"
        text="Journey into the future of education, where jointure and impossibility give way to limitless possibilities. Friendly bachelor entrances lead to a world where knowledge meets innovation."
      />
    </div>
  </div>
);

export default Ai;
