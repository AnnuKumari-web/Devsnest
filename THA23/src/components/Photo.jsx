import "./Photo.css";
import useFetch from "../Hooks/useFetch";

const Photo = () => {
  const [data1] = useFetch("https://dog.ceo/api/breeds/image/random");
  const [data2] = useFetch("https://dog.ceo/api/breeds/image/random");
  return (
    <div>
      <img src={data1.message} alt="This is a dog" />
      <img src={data2.message} alt="This is a dog" />
    </div>
  );
};

export default Photo;
