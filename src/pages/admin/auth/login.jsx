import BackgroundBeams from "components/common/bg-animation";

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

const Login = () => {
  return (
    <div class="bg-slate-900">
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Card className="bg-gray-950 text-white w-[80%] rounded-2xl border-slate-800">
            <CardHeader>
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription className="pb-4">
                Enter your information to create an account
              </CardDescription>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="#" className="underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="h-[44rem] w-full rounded-l-3xl bg-gray-950 relative flex items-start justify-start antialiased">
          <div className="p-12">
            <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 font-sans font-bold">
             Get Started
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg relative z-10">
            Create an account to experience our
            powerful CRM tool.
            </p>
          </div>
          <BackgroundBeams />
        </div>
      </div>
    </div>
  );
};

export default Login;
