import LoaderImage from "../assets/tube-spinner.svg";
const CircleLoader = () => {
  return (
    <>
      <img src={LoaderImage} height={"30px"} />
      <span>Loading...</span>
    </>
  );
};

export default CircleLoader;
