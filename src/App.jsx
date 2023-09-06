import { useContext } from "react";
import Resume from "../components/Resume/Resume";
import Upload from "../components/Upload/Upload";
import { Context } from "../provider/ContextProvider";

function App() {
  const { userJson } = useContext(Context);
  return <>{userJson ? <Resume /> : <Upload />}</>;
}

export default App;
