interface WaveDividerProps {
  upperColor: string;
  lowerColor: string;
  flip?: boolean;
  fillBottom?: boolean;
  className?: string;
}

const WaveDivider = ({ upperColor, lowerColor, flip = false, fillBottom = false, className = '' }: WaveDividerProps) => {
  const wavePath = fillBottom
    ? "M 0 60 Q 150 35 300 60 T 600 60 T 900 60 T 1200 60 V 125 H 0 Z"
    : "M 0 60 Q 150 35 300 60 T 600 60 T 900 60 T 1200 60 V -5 H 0 Z";

  return (
    <div
      className={`wave-divider-container ${className}`}
      style={{ backgroundColor: fillBottom ? 'transparent' : lowerColor }}
    >
      <svg
        className={`wave-svg ${flip ? 'wave-flip' : ''}`}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ overflow: 'visible' }}
      >
        <path d={wavePath} fill={fillBottom ? lowerColor : upperColor} />
      </svg>
    </div>
  );
};

export default WaveDivider;
