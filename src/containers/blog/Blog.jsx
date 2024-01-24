import React from 'react';
import Article from '../../components/article/Article';
import { blog010Image, blog020Image, blog030Image,blog040Image, blog050Image } from './imports';
import './blog.css';

const Blog = () => (
  <div className="tech__blog section__padding" id="blog">
    {/* Blog heading */}
    <div className="tech__blog-heading">
      <h1 className="gradient__text">Unraveling the Future: <br /> Exploring AI and Quantum Computing.</h1>
    </div>

    {/* Blog container with articles */}
    <div className="tech__blog-container">
      {/* Group A */}
      <div className="tech__blog-container_groupA">
        {/* Individual article component with AI-focused content */}
        <Article imgUrl={blog010Image} date="Sep 26, 2021" text="Unlocking the Potential of GPT-3: A Glimpse into the AI-Driven Future." />
      </div>

      {/* Group B */}
      <div className="tech__blog-container_groupB">
        {/* Articles with Quantum Computing and AI exploration */}
        <Article imgUrl={blog020Image} date="Sep 26, 2021" text="Quantum Leap: How AI and Quantum Computing Shape the Technological Landscape." />
        <Article imgUrl={blog030Image} date="Sep 26, 2021" text="Navigating the Quantum Realm: AI's Role in Quantum Computing Advancements." />
        <Article imgUrl={blog040Image} date="Sep 26, 2021" text="Bridging Realities: GPT-3 and Quantum Computing Paving the Way for Tomorrow." />
        <Article imgUrl={blog050Image} date="Sep 26, 2021" text="Beyond Turing: AI and Quantum Synergy Redefining Future Technological Paradigms." />
      </div>
    </div>
  </div>
);

export default Blog;
