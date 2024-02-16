interface IconProps {
  svg: string;
  rotationDegree?: number;
  position?: string;
}

interface BackgroundLayerProps {
  frontIcons?: IconProps[];
  backIcons?: IconProps[];
  backgroundColor: string;
}

export default function BackgroundLayer({
  frontIcons,
  backIcons,
  backgroundColor
}: BackgroundLayerProps) {
  return (
    <div className="layered-styles">
      <div className="background-color" style={{ backgroundColor: `${backgroundColor}` }}>
        {/* Your color content goes here */}
      </div>
      <div className="icons-back">
        {backIcons &&
          backIcons.map(({ svg, rotationDegree, position }, index) => (
            <div
              key={index}
              className="icon-back"
              style={{
                transform: `rotate(${rotationDegree || 0}deg)`,
                position: 'absolute',
              }}
            >
              {svg}
            </div>
          ))}
      </div>
      <div className="icons-front">
        {frontIcons &&
          frontIcons.map(({ svg, rotationDegree, position }, index) => (
            <div
              key={index}
              className="icon-front"
              style={{
                transform: `rotate(${rotationDegree || 0}deg)`,
                position: "absolute",
              }}
            >
              {svg}
            </div>
          ))}
      </div>
    </div>
  );
}
