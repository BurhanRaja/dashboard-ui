import BackgroundBeams from "components/common/animation/bg-animation";
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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormSelectSearch from "components/common/form-select-search";
import AuthTemplate from "components/common/auth-template";
import Loading from "components/common/animation/loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const data = await fetch("https://tsapi.tradeinfy.com/api/admin/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
    if (response?.status == 200 && response?.success == true) {
      setLoading(false);
      localStorage.setItem("admintoken", response?.token);
      navigate("/admin/dashboard");
    }
  };

  return (
    <AuthTemplate>
      <Card className="bg-gray-950 text-white w-[70%] rounded-xl border-slate-800 p-6 py-3">
        <CardHeader className="space-y-4">
          <div className="">
            <img src="/logotechysquad-light.png" />
          </div>
          <div className="flex justify-between items-center mb-7">
            <div>
              <CardTitle className="text-2xl">Sign In</CardTitle>
            </div>
            <div>
              <div className="mt-4 text-sm">
                Don't have an Account?{" "}
                <Link to="/admin/register" className="underline">
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid gap-4">
              <div className="">
                <CustomFormLabel htmlFor="email" label={"Email"} compulsory />
                <FormInput
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  setValue={(val) => setEmail(val)}
                />
              </div>
              <div className="">
                <CustomFormLabel
                  htmlFor="password"
                  label={"Password"}
                  compulsory
                />
                <FormInput
                  id="password"
                  type={"password"}
                  placeholder="Enter Password"
                  value={password}
                  setValue={(val) => setPassword(val)}
                />
                <p className="flex justify-end mt-2">
                  <Link to={""} className="underline text-xs">
                    Forget Password?
                  </Link>
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary mt-5 hover:bg-secondary"
                disabled={loading}
              >
                {loading ? <Loading /> : "Sign In"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </AuthTemplate>
  );
};

export default Login;
