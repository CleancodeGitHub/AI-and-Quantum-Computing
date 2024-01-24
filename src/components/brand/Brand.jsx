// brand/Brand.jsx
import React from 'react';
import { pinterestImage, linkedInImage, twitterImage, tiktokImage, shopifyImage } from './imports'; // Importing brand logos
import './brand.css';

// Brand component showcasing logos of different companies
const Brand = () => (
  <div className="brand__container section__padding">
    {/* Individual divs for each brand logo */}
    <div>
      <img src={pinterestImage} alt="Google" />
    </div>
    <div>
      <img src={linkedInImage} alt="Slack" />
    </div>
    <div>
      <img src={twitterImage} alt="Atlassian" />
    </div>
    <div>
      <img src={tiktokImage} alt="Dropbox" />
    </div>
    <div>
      <img src={shopifyImage} alt="Shopify" />
    </div>
  </div>
);

export default Brand;