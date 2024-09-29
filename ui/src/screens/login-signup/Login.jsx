import { LockIcon, MailIcon, RightArrowIcon } from "assets/svg";
import Button from "components/Button";
import Card from "components/Card";
import Link from "components/Link";
import TextInput from "components/TextInput";
import {
  TypoExtraLargeSemiBold,
  TypoLargeSemiBold,
  TypoMediumSemiBold,
} from "components/TypoGraphy";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "screens/layouts/AppContainer";
const Login = () => {
  const navigate = useNavigate();
  return (
    <AppContainer>
      <div className="grid grid-cols-2 h-full">
        <div className="bg-primary-blue"></div>
        <div className="flex flex-col items-center justify-center gap-16">
          <span className="flex flex-col gap-2 items-center">
            <TypoExtraLargeSemiBold>Welcome!</TypoExtraLargeSemiBold>
            <TypoMediumSemiBold>Login to your acoount</TypoMediumSemiBold>
          </span>
          <div className="w-[24rem] flex flex-col items-center justify-center gap-4">
            <TextInput required title="Email" placeholder="Enter your email" icon={MailIcon} />
            <TextInput
              required
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
