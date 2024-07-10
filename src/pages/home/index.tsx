
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { TextInput } from "@mantine/core";
export default function Home() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <TextInput
      label="Input label"
      description="Input description"
      placeholder="Input placeholder"
    />
    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}