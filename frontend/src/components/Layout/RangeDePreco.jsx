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
    const thumbWidth = 18; 
    const usableTrackWidth = trackWidth - thumbWidth;

    const percentMin = min / 200;
    const percentMax = max / 200;

    const minPixel = usableTrackWidth * percentMin;
    const maxPixel = usableTrackWidth * percentMax;

    setMinPos(minPixel);
    setMaxPos(maxPixel);
  };

  const handleMinChange = (e) => {
    const novoMin = parseInt(e.target.value);
    if (novoMin <= max) {
      setMin(novoMin);
      onRangeChange(novoMin, max);
    }
  };

  const handleMaxChange = (e) => {
    const novoMax = parseInt(e.target.value);
    if (novoMax >= min) {
      setMax(novoMax);
      onRangeChange(min, novoMax);
    }
  };

  return (
    <div className="range-container">
      <h3>Preço</h3>
      <div className="sliders" ref={trackRef}>
        <input
          type="range"
          min="0"
          max="200"
          value={min}
          onChange={handleMinChange}
        />
        <input
          type="range"
          min="0"
          max="200"
          value={max}
          onChange={handleMaxChange}
        />

        <div
          className="range-highlight"
          style={{
            left: `${minPos + 18 / 2}px`,
            width: `${maxPos - minPos}px`,
          }}
        />

        <div className="preco-label" style={{ left: `${minPos + 18 / 2}px` }}>
          R${min}
        </div>
        <div className="preco-label" style={{ left: `${maxPos + 18 / 2}px` }}>
          R${max}
        </div>
      </div>
    </div>
  );
};

export default RangeDePreco;
