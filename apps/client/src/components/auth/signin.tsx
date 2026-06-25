"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInSchema } from "@repo/common/types";
import Button from "../forms/button";
import Input from "../forms/input";
import Error from "../forms/error";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signin } from "@/api/auth";
import Link from "next/link";
import { useUserStore } from "@/store/useUserStore";

type signinForm = z.infer<typeof signInSchema>;

export default function Signin() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<signinForm>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: signinForm) => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const response = await signin(userData);
      useUserStore.getState().setUser({ name: response.user.name, email: response.user.email });
      localStorage.setItem("token", response.token.encoded);
      toast.success("Signed in successfully!");
      router.push('/draw-mode');
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      reset();
    }
  };

  return (
    <div className="relative flex justify-center items-center w-screen h-screen overflow-hidden animated-gradient">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#00f0ff] opacity-[0.07] blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#7b61ff] opacity-[0.07] blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff3dff] opacity-[0.03] blur-[150px] rounded-full" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/">
            <div className="text-3xl sm:text-4xl inline-block">
              ძထძℓ౿
              <span className="px-1.5 py-0.5 text-[#00f0ff] glow-text-cyan">ᦓραс౿</span>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="glass-strong rounded-2xl p-8 sm:p-10">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Welcome back
            </h1>
            <p className="text-white/40">
              Sign in to continue creating
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <Input
              {...register("email")}
              label="Email"
              type="email"
              placeholder="you@example.com"
              className="w-full"
            />

            <Input
              {...register("password")}
              label="Password"
              type="password"
              placeholder="Enter your password"
              className="w-full"
            />

            {errors.email ? (
              <Error text={errors.email?.message} />
            ) : (
              <Error text={errors.password?.message} />
            )}

            <Button
              disabled={isSubmitting}
              className={isSubmitting ? "opacity-50" : ""}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : "Sign in"}
            </Button>
          </form>

          <div className="mt-6 text-center text-white/40">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
