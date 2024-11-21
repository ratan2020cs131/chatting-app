import {
  LockIcon,
  MailIcon,
  RightArrowIcon,
  RegisterSvg,
  UserIcon,
} from "assets/svg";
import CallIcon from "assets/svg/CallIcon";
import Button from "components/Button";
import SelectDropdown from "components/SelectDropdown";
import TextInput from "components/TextInput";
import {
  TypoExtraLargeSemiBold,
  TypoMediumSemiBold,
} from "components/TypoGraphy";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "screens/layouts/AppContainer";
import { countryCode } from "screens/login-signup/constants";
import IconWrapper from "components/IconWrapper";
import { useRef } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const touchStartY = useRef(0);
  const [phone, setPhone] = useState();
  const [isVisible, setIsVisible] = useState(true);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientX;
    if (touchStartY.current - touchEndY > 20) {
      console.log("scroll up");
      setIsVisible(false);
    }
    if (touchEndY - touchStartY.current > 20) setIsVisible(true);
  };

  return (
    <AppContainer>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 h-full transition-transform duration-500 ${
          isVisible
            ? "transform translate-y-0"
            : "transform translate-y-[-100%] md:translate-y-0"
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="bg-primary-blue flex flex-col items-center justify-center h-screen overflow-hidden">
          <IconWrapper size="xxlarge" Icon={RegisterSvg} />
        </div>
        <div className="flex flex-col items-center justify-center gap-16 px-4 py-8">
          <span className="flex flex-col gap-2 items-center">
            <TypoExtraLargeSemiBold>Welcome!</TypoExtraLargeSemiBold>
            <TypoMediumSemiBold>
              Create a new account to explore
            </TypoMediumSemiBold>
          </span>
          <div className="w-full md:w-[24rem] flex flex-col items-center justify-center gap-4">
            <TextInput
              fullWidth
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
            <TextInput
              fullWidth
              type="email"
              title="Email"
              placeholder="Enter your email"
              icon={MailIcon}
            />
            <TextInput
              fullWidth
              secret
              title="Password"
              placeholder="Enter your password"
              icon={LockIcon}
            />
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
