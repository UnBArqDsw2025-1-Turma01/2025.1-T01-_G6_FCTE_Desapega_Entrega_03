// Interface base para todas as estratégias
export class RangeCalculationStrategy {
  calculate(min, max, trackWidth) {
    throw new Error("Método calculate deve ser implementado");
  }
}

// Estratégia Linear Padrão (distribuição uniforme)
export class LinearStrategy extends RangeCalculationStrategy {
  calculate(min, max, trackWidth) {
    return {
      minPos: (min / 200) * trackWidth,
      maxPos: (max / 200) * trackWidth
    };
  }
}

// Estratégia para mais precisão em valores baixos (0-100)
export class PrecisionBaixaStrategy extends RangeCalculationStrategy {
  calculate(min, max, trackWidth) {
    const adjust = (value) => {
      return value <= 100 ? value * 1.5 : 150 + (value - 100);
    };
    
    return {
      minPos: (adjust(min) / 200) * trackWidth,
      maxPos: (adjust(max) / 200) * trackWidth
    };
  }
}

// Estratégia com snap para faixas pré-definidas
export class SnapStrategy extends RangeCalculationStrategy {
  constructor(steps = [0, 50, 100, 150, 200]) {
    super();
    this.steps = steps;
  }

  calculate(min, max, trackWidth) {
    const findClosest = (value) => 
      this.steps.reduce((prev, curr) => 
        Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
    
    return {
      minPos: (findClosest(min) / 200) * trackWidth,
      maxPos: (findClosest(max) / 200) * trackWidth
    };
  }
}