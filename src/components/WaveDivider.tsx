interface WaveDividerProps {
  upperColor: string;
  lowerColor: string;
  flip?: boolean;
}

const WaveDivider = ({ upperColor, lowerColor, flip = false }: WaveDividerProps) => {
  const wavePath = "M 0 60 Q 150 35 300 60 T 600 60 T 900 60 T 1200 60 V 0 H 0 Z";

  return (
    <div
      className="wave-divider-container"
      style={{ backgroundColor: lowerColor }}
    >
      <svg
        className={`wave-svg ${flip ? 'wave-flip' : ''}`}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d={wavePath} fill={upperColor} />
      </svg>
    </div>
  );
};

export default WaveDivider;
