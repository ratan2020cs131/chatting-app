import { SearchIcon } from "assets/svg";
import "./index.css";
import TextInput from "components/TextInput";

const App = () => {
  return (
    <div className="min-h-screen p-4 flex flex-col gap-4">
      <TextInput variant="error" title="Error" placeholder="This is error input" required />
      <TextInput variant="success" title="Success" placeholder="This is success input" required />
      <TextInput icon={SearchIcon} title="Default" placeholder="This is default input" />
    </div>
  );
};

export default App;
