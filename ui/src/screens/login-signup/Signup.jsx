import { LockIcon, MailIcon, RightArrowIcon, RegisterSvg, UserIcon } from "assets/svg";
import CallIcon from "assets/svg/CallIcon";
import Button from "components/Button";
import SelectDropdown from "components/SelectDropdown";
import TextInput from "components/TextInput";
import { TypoExtraLargeSemiBold, TypoMediumSemiBold } from "components/TypoGraphy";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "screens/layouts/AppContainer";
import { countryCode } from "screens/login-signup/constants";
import IconWrapper from "components/IconWrapper";

const Signup = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState();

  return (
    <AppContainer>
      <div className="grid grid-cols-2 h-full">
        <div className="bg-primary-blue flex flex-col items-center justify-center">
          <IconWrapper size="xxlarge" Icon={RegisterSvg} />
        </div>
        <div className="flex flex-col items-center justify-center gap-16">
          <span className="flex flex-col gap-2 items-center">
            <TypoExtraLargeSemiBold>Welcome!</TypoExtraLargeSemiBold>
            <TypoMediumSemiBold>Create a new account to explore</TypoMediumSemiBold>
          </span>
          <div className="w-[24rem] flex flex-col items-center justify-center gap-4">
            <TextInput
              title="Full name"
              placeholder="Enter your full name"
              icon={UserIcon}
              limit={100}
            />
            <span className="flex gap-2 w-full">
              <SelectDropdown
                width="w-[6rem]"
                title="Code"
                placeholder="+00"
                options={countryCode}
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
            <TextInput type="email" title="Email" placeholder="Enter your email" icon={MailIcon} />
            <TextInput secret title="Password" placeholder="Enter your password" icon={LockIcon} />
            <Button fullWidth icon={RightArrowIcon} title="Signup" />
            <Button
              fullWidth
              title="Already have an account"
              variant="ghost"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
      </div>
    </AppContainer>
  );
};
export default Signup;
