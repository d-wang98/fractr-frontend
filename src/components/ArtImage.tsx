// import "../../public/logo192.png";

const ArtImage = (props: { art_image: string }) => {
  const image = require("../../assets/" + props.art_image + ".png");
  return (
    <div>
      <img src={image} />
    </div>
  );
};
export default ArtImage;
