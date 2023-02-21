import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링 될때마다 실행됨 - 렌더링 이후
  useEffect(() => {
    console.log('렌더링 🎨');
   });

   // 마운팅 + count가 변할때마다 실행됨
   useEffect(() => {
    console.log('💯 count 변화');
   }, [count]);

   // 마운팅 + name이 변할때마다 실행됨
   useEffect(() => {
    console.log('🌟 name 변화');
   }, [name]);

   useEffect(() => {
    console.log('마운팅 👔');
   }, []);
   
  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default App;