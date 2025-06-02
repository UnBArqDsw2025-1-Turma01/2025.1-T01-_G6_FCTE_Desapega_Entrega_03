// Estratégia Linear Padrão (distribuição uniforme)
export const linearStrategy = (min, max, trackWidth) => ({
  minPos: (min / 200) * trackWidth,
  maxPos: (max / 200) * trackWidth
});

// Estratégia para mais precisão em valores baixos (0-100)
export const precisionBaixaStrategy = (min, max, trackWidth) => {
  const adjust = (value) => (value <= 100 ? value * 1.5 : 150 + (value - 100));
  return {
    minPos: (adjust(min) / 200) * trackWidth,
    maxPos: (adjust(max) / 200) * trackWidth
  };
};

// Estratégia com snap para faixas pré-definidas
export const createSnapStrategy = (steps = [0, 50, 100, 150, 200]) => {
  const findClosest = (value) =>
    steps.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);

  return (min, max, trackWidth) => ({
    minPos: (findClosest(min) / 200) * trackWidth,
    maxPos: (findClosest(max) / 200) * trackWidth
  });
};
