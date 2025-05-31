import React, { useState, useRef, useEffect } from "react";
import "./style_range.css";

const RangeDePreco = ({ onRangeChange }) => {
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(100);
  const trackRef = useRef(null);
  const [minPos, setMinPos] = useState(0);
  const [maxPos, setMaxPos] = useState(0);

  useEffect(() => {
    calcularPosicoes();
  }, [min, max]);

  const calcularPosicoes = () => {
    const trackWidth = trackRef.current.offsetWidth;
    const percentMin = min / 200;
    const percentMax = max / 200;
    setMinPos(trackWidth * percentMin);
    setMaxPos(trackWidth * percentMax);
  };

  const handleMinChange = (e) => {
    const novoMin = parseInt(e.target.value);
    setMin(novoMin);
    onRangeChange(novoMin, max);
  };

  const handleMaxChange = (e) => {
    const novoMax = parseInt(e.target.value);
    setMax(novoMax);
    onRangeChange(min, novoMax);
  };

  return (
    <div className="range-container">
      <h3>Preço</h3>
      <div className="sliders" ref={trackRef}>
        <input type="range" min="0" max="200" value={min} onChange={handleMinChange} />
        <input type="range" min="0" max="200" value={max} onChange={handleMaxChange} />
        <div className="preco-label" style={{ left: `${minPos}px` }}>
          R${min}
        </div>
        <div className="preco-label" style={{ left: `${maxPos}px` }}>
          R${max}
        </div>
      </div>
    </div>
  );
};

export default RangeDePreco;

