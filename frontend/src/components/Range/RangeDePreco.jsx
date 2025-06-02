import React, { useState, useRef, useEffect } from "react";

const RangeDePreco = ({ onRangeChange, strategy }) => {
  const [min, setMin] = useState(27);
  const [max, setMax] = useState(162);
  const trackRef = useRef(null);
  const [positions, setPositions] = useState({ minPos: 0, maxPos: 0 });

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.offsetWidth - 18;
      const { minPos, maxPos } = strategy.calculate(min, max, trackWidth);
      setPositions({ minPos, maxPos });
    }
  }, [min, max, strategy]);

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
        <div className="track-background"></div>

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
            left: positions.minPos + 9 + "px",
            width: positions.maxPos - positions.minPos + "px",
          }}
        />

        <div className="preco-label" style={{ left: positions.minPos + 9 + "px" }}>
          R${min}
        </div>
        <div className="preco-label" style={{ left: positions.maxPos + 9 + "px" }}>
          R${max}
        </div>
      </div>

      <style>{`
        .range-container {
          width: 300px;
          margin: 40px auto;
          font-family: sans-serif;
          color: #075985;
        }

        .sliders {
          position: relative;
          height: 40px;
          margin-bottom: 10px;
        }

        .track-background {
          position: absolute;
          top: 50%;
          left: 9px;
          right: 9px;
          height: 6px;
          background: #e0e0e0;
          border-radius: 3px;
          transform: translateY(-50%);
          z-index: 0;
        }

        input[type="range"] {
          width: calc(100% - 18px);
          -webkit-appearance: none;
          background: transparent;
          position: absolute;
          top: 50%;
          left: 9px;
          margin: 0;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 2;
        }

        input[type="range"]::-webkit-slider-runnable-track {
          height: 0;
          background: transparent;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          pointer-events: auto;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: orange;
          border: 2px solid white;
          cursor: grab;
          position: relative;
          z-index: 3;
          top: calc(50% - 9px);
        }

        .preco-label {
          position: absolute;
          top: 35px;
          transform: translateX(-50%);
          font-size: 0.9rem;
          color: #333;
          font-weight: normal;
          z-index: 1;
        }

        .range-highlight {
          position: absolute;
          top: 50%;
          height: 6px;
          background-color: orange;
          border-radius: 3px;
          transform: translateY(-50%);
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default RangeDePreco;
