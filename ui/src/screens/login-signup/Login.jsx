import { LockIcon, LoginSvg, MailIcon, RightArrowIcon } from "assets/svg";
import Button from "components/Button";
import Card from "components/Card";
import IconWrapper from "components/IconWrapper";
import Link from "components/Link";
import TextInput from "components/TextInput";
import {
  TypoExtraLargeSemiBold,
  TypoMediumSemiBold,
} from "components/TypoGraphy";
import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "screens/layouts/AppContainer";
const Login = () => {
  const navigate = useNavigate();
  const touchStartY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientX;
    if (touchStartY.current - touchEndY > 20) setIsVisible(false);
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
        <div className="bg-primary-blue h-screen flex flex-col items-center justify-center overflow-hidden">
          <IconWrapper Icon={LoginSvg} size="xxlarge" />
        </div>
        <div className="flex flex-col items-center justify-center gap-16 px-4 py-8">
          <span className="flex flex-col gap-2 items-center">
            <TypoExtraLargeSemiBold>Welcome!</TypoExtraLargeSemiBold>
            <TypoMediumSemiBold>Login to your acoount</TypoMediumSemiBold>
          </span>
          <div className="w-full md:w-[24rem] flex flex-col items-center justify-center gap-4">
            <TextInput
              fullWidth
              required
              title="Email"
              placeholder="Enter your email"
              icon={MailIcon}
            />
            <TextInput
              required
              fullWidth
              secret
              title="Password"
              placeholder="Enter your password"
              icon={LockIcon}
            />
            <Button fullWidth icon={RightArrowIcon} title="Login" />
            <Button
              fullWidth
              title="Create account"
              variant="ghost"
              onClick={() => navigate("/signup")}
            />
            <Link text="Forgot password?" />
          </div>
        </div>
      </div>
    </AppContainer>
  );
};
export default Login;
