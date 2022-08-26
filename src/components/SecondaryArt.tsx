import { Prices } from "./Prices";

import ArtImage from "./ArtImage";

const SecondaryArt = () => {
  return (
    <div>
      <h3>WELCOME TO FRACTR HOME</h3>
      <ArtImage art_image="logo512" />
      <Prices p_type="Lowest Ask" />
      <Prices p_type="Highest Bid" />
      <Prices p_type="Latest Transaction" />
    </div>
  );
};
export default SecondaryArt;
