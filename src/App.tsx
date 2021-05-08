import { FC, useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  selected: boolean;
  handleClick: (f: unknown) => void;
}

const Star: FC<StarProps> = ({ selected = false, handleClick = (f) => f }) => (
  <FaStar color={selected ? "red" : "gray"} size="2em" onClick={handleClick} />
);

const StarRating = () => {
  const [selectedStars, setSelectedStars] = useState(0);
  const createArray = (length: number) => [...new Array(length)];

  return (
    <>
      {createArray(5).map((_, index: number) => (
        <Star
          key={index}
          selected={selectedStars > index}
          handleClick={() => setSelectedStars(index + 1)}
        />
      ))}
    </>
  );
};

const App = () => <StarRating />;

export default App;
