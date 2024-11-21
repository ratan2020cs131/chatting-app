import {
  DobleChevronUpIcon,
  LockIcon,
  LoginSvg,
  MailIcon,
  RightArrowIcon,
} from "assets/svg";
import Button from "components/Button";
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
import { colors } from "root/tailwind.config";
import AppContainer from "screens/layouts/AppContainer";

const Login = () => {
  const navigate = useNavigate();
  const touchStartY = useRef(0);
  const touchMoveY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    touchMoveY.current = 0;
  };

  const handleTouchMove = (e) => {
    touchMoveY.current = e.touches[0].clientY - touchStartY.current;
  };

  const handleTouchEnd = () => {
    const movementThreshold = 20;
    if (Math.abs(touchMoveY.current) > movementThreshold) {
      if (touchMoveY.current < 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
    touchStartY.current = 0;
    touchMoveY.current = 0;
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
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative bg-primary-blue h-screen flex flex-col items-center justify-center overflow-hidden">
          <IconWrapper Icon={LoginSvg} size="xxlarge" />
          <div className="flex md:hidden flex-col absolute bottom-8 items-center animate-bounce">
            <IconWrapper
              Icon={DobleChevronUpIcon}
              size="large"
              color={colors.primary.white}
            />
            <TypoMediumSemiBold color="text-primary-white">
              Slide up to
            </TypoMediumSemiBold>
            <TypoExtraLargeSemiBold color="text-primary-white">
              Login!
            </TypoExtraLargeSemiBold>
          </div>
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
