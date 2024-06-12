import BackgroundBeams from "components/common/bg-animation";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import { FcGoogle } from "react-icons/fc";
import { Button } from "components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import React from "react";
import { Link } from "react-router-dom";
import FormSelectSearch from "components/common/form-select-search";
import AuthTemplate from "components/common/auth-template";

const Login = () => {
  return (
    <AuthTemplate>
      <Card className="bg-gray-950 text-white w-[70%] rounded-xl border-slate-800 p-6 py-3">
        <CardHeader>
          <div className="flex justify-between items-center mb-7">
            <div>
              <CardTitle className="text-2xl">Sign In</CardTitle>
            </div>
            <div>
              <div className="mt-4 text-sm">
                Don't have an Account?{" "}
                <Link to="/register" className="underline">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full bg-slate-900 border-slate-800 hover:bg-white hover:text-slate-950"
          >
            <FcGoogle className="text-2xl mr-3" />
            <span>Sign in with Google</span>
          </Button>
          <p className="text-center text-xs pt-3 sign-or">OR</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="">
              <CustomFormLabel htmlFor="email" label={"Email"} compulsory />
              <FormInput id="email" placeholder="Enter Email" />
            </div>
            <div className="">
              <CustomFormLabel htmlFor="password" label={"Password"} compulsory />
              <FormInput id="password" placeholder="Enter Password" />
              <p className="flex justify-end mt-2">
                <Link to={""} className="underline text-xs">
                  Forget Password?
                </Link>
              </p>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary mt-5 hover:bg-secondary"
            >
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </AuthTemplate>
  );
};

export default Login;
