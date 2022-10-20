import { google, slack, atlassian, dropbox, shopify } from "./import";

import "./brand.css";
const Brand = () => (
    <div className="brand section__padding">
      <div>
        <img src={google} alt="BRAND" />
      </div>
      <div>
        <img src={slack} alt="BRAND" />
      </div>
      <div>
        <img src={atlassian} alt="BRAND" />
      </div>
      <div>
        <img src={dropbox} alt="BRAND" />
      </div>
      <div>
        <img src={shopify} alt="BRAND" />
      </div>
    </div>
);

export default Brand;
