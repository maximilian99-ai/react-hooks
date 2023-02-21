import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);

  const handleClick = () => {
    let newTime;
    if (time >= 23 ) {
      newTime = 0;
    } else {
      newTime = time +1;
    }
    setTime(newTime);
  };

  console.log('업데이트!!');

  return (
    <div>
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;