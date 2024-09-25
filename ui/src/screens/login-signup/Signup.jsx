import { LockIcon, MailIcon, UserIcon } from "assets/svg";
import CallIcon from "assets/svg/CallIcon";
import Button from "components/Button";
import Link from "components/Link";
import SelectDropdown from "components/SelectDropdown";
import TextInput from "components/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "screens/layouts/AppContainer";

const Signup = () => {
  const [phone, setPhone] = useState();

  return (
    <AppContainer>
      <div className="grid grid-cols-2 h-full">
        <div className="bg-primary-blue"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[24rem] flex flex-col items-center justify-center gap-4">
            <TextInput
              title="Full name"
              placeholder="Enter your full name"
              icon={UserIcon}
              limit={100}
            />
            <TextInput type="email" title="Email" placeholder="Enter your email" icon={MailIcon} />
            <span className="flex gap-2 w-full">
              <SelectDropdown
                width="w-[6rem]"
                title="Code"
                placeholder="+00"
                options={[
                  { label: "US", value: "+1" },
                  { label: "IN", value: "+91" },
                ]}
              />
              <TextInput
                fullWidth
                type="number"
                title="Phone"
                placeholder="Enter your phone number"
                icon={CallIcon}
                value={phone}
                onChange={(value) => setPhone(value)}
              />
            </span>
            <TextInput secret title="Password" placeholder="Enter your password" icon={LockIcon} />
            <Button fullWidth title="Signup" />
            <Link text="Already have an account?" to="/login" />
          </div>
        </div>
      </div>
    </AppContainer>
  );
};
export default Signup;
