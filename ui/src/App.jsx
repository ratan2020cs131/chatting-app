import { SearchIcon } from "assets/svg";
import "./index.css";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import Button from "components/Button";

const App = () => {
  return (
    <div className="min-h-screen p-4 flex flex-col gap-4">
      <TextInput variant="error" title="Error" placeholder="This is error input" required />
      <TextInput variant="success" title="Success" placeholder="This is success input" required />
      <TextInput title="Default" placeholder="This is default input" />
      <TextInput icon={SearchIcon} title="Search" placeholder="Enter to search" />
      <TextInput secret title="Password" placeholder="Enter Password" />

      <TextArea variant="error" title="Error" placeholder="This is error input" required />
      <TextArea variant="success" title="Success" placeholder="This is success input" required />
      <TextArea title="Default" placeholder="This is default input" />

      <div className="flex gap-4 items-center">
        <Button loading title="Loading" />
        <Button loading title="Loading" variant="success" />
        <Button icon={SearchIcon} title="Search" variant="ghost" />
      </div>
    </div>
  );
};

export default App;
