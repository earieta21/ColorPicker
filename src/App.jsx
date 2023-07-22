import { useState } from "react";
const [selectedColor, setSelectedColor] = useState('')
const Color = ({color, setSelectedColor}) => {
  return (
    <div
    className={color}
    onClick={() => setSelectedColor(color)}
    ></div>
  )
}

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selectedColor </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">{
        <><Color color='violet' setSelectedColor={setSelectedColor} />
        <Color color='blue' setSelectedColor={setSelectedColor} />
        <Color color='black' setSelectedColor={setSelectedColor} /></>
      }</div>
    </div>
  );
};

export default App;
