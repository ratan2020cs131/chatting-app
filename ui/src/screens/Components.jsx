import Button from "components/Button";
import TextArea from "components/TextArea";
import TextInput from "components/TextInput";
import AppContainer from "screens/layouts/AppContainer";
import { SearchIcon } from "assets/svg";
import Link from "components/Link";

const Components = () => {
  return (
    <AppContainer>
      <TextInput variant="error" title="Error" placeholder="This is error input" required />
      <TextInput variant="success" title="Success" placeholder="This is success input" required />
      <TextInput title="Default" placeholder="This is default input" />
      <TextInput icon={SearchIcon} title="Search" placeholder="Enter to search" />
      <TextInput disabled icon={SearchIcon} title="Disabled" placeholder="Enter to search" />
      <TextInput secret title="Password" placeholder="Enter Password" />

      <TextArea variant="error" title="Error" placeholder="This is error input" required />
      <TextArea variant="success" title="Success" placeholder="This is success input" required />
      <TextArea title="Default" placeholder="This is default input" />

      <div className="flex gap-4 items-center">
        <Button loading title="Loading" />
        <Button loading title="Loading" variant="success" />
        <Button icon={SearchIcon} title="Search" variant="ghost" />
        <Button
          fullWidth
          disabled
          icon={SearchIcon}
          title="Search"
          variant="ghost"
          tooltip="Disabled"
        />
      </div>

      <Link to="/login" text="Click here to go to Login" />
      <Link to="/login" text="Click here to go to Login" variant="error" />
      <Link to="/login" text="Click here to go to Login" variant="success" />
    </AppContainer>
  );
};
export default Components;
