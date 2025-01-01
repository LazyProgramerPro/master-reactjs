import { useState } from "react";

const MousePosition = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(e) => {
        setPos({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      {/* some stuff... */}
    </div>
  );
};

export default MousePosition;
