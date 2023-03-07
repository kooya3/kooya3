import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p
        style={{ 
          fontSize: 17,
          color: "#FFB703",
          fontWeight: 800,
          marginTop: 40,
        }}
        >{progress.toFixed(2)}%</p>
      </span>
    </Html>
  )
}

export default Loader