import React from "react";
import AuthTemplate from "components/common/auth-template";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import { FcGoogle } from "react-icons/fc";
import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Link } from "react-router-dom";
import FormSelectSearch from "components/common/form-select-search";
import { Separator } from "components/ui/separator";

const Register = () => {
  return (
    <>
      <AuthTemplate>
        <Card className="bg-gray-950 text-white w-[100%] xl:w-[80%] rounded-xl border-slate-800 p-6 py-3">
          <CardHeader className="space-y-4">
            <div className="">
              <img src="/logotechysquad-light.png" />
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <CardTitle className="text-2xl">Sign Up</CardTitle>
              </div>
              <div>
                <div className="mt-4 text-sm">
                  Already have an account?{" "}
                  <Link to="/admin/login" className="underline">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full bg-slate-900 border-slate-800 hover:bg-white hover:text-slate-950"
            >
              <FcGoogle className="text-2xl mr-3" />
              <span>Sign up with Google</span>
            </Button>
            <p className="text-center text-xs pt-3 sign-or">OR</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <CustomFormLabel htmlFor="name" label={"Name"} compulsory />
                  <FormInput id="name" placeholder="Enter Name" />
                </div>
                <div className="grid gap-2">
                  <CustomFormLabel htmlFor="email" label={"Email"} compulsory />
                  <FormInput id="email" placeholder="Enter Email" />
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <CustomFormLabel
                    htmlFor="password"
                    label={"Password"}
                    compulsory
                  />
                  <FormInput id="password" placeholder="Enter Password" />
                </div>
                <div className="grid gap-2">
                  <CustomFormLabel
                    htmlFor="confirm-password"
                    label={"Confirm Password"}
                    compulsory
                  />
                  <FormInput
                    id="confirm-password"
                    placeholder="Enter Confirm Password"
                  />
                </div>
              </div>
              <div className="">
                <CustomFormLabel
                  htmlfor={"country"}
                  label="Country"
                  compulsory
                />
                <FormSelectSearch
                  data={[]}
                  emptyText={"No Country Found"}
                  margin
                  width={"w-[300px] md:w-[530px]"}
                />
              </div>
              <div className="">
                <CustomFormLabel htmlfor={"phone"} label="Phone" compulsory />
                <div className="grid grid-cols-5 gap-1">
                  <FormInput id="phone" type={"text"} disabled value={"+998"} />
                  <div className="col-span-4">
                    <FormInput
                      id="phone"
                      type={"text"}
                      placeholder={"Enter Phone"}
                    />
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary mt-5 hover:bg-secondary"
              >
                Create an account
              </Button>
            </div>
          </CardContent>
        </Card>
      </AuthTemplate>
    </>
  );
};

export default Register;
