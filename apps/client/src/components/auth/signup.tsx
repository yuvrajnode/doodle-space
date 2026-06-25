"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CreateUserSchema } from "@repo/common/types";
import Button from "../forms/button";
import Input from "../forms/input";
import Error from "../forms/error";
import { signup } from "@/api/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUserStore } from "@/store/useUserStore";

type signupForm = z.infer<typeof CreateUserSchema>;

export default function Signup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<signupForm>({
    resolver: zodResolver(CreateUserSchema),
  });

  const onSubmit = async (data: signupForm) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password
      }
      const response = await signup(userData);
      useUserStore.getState().setUser({ name: response.user.name, email: response.user.email });
      localStorage.setItem('token', response.token.encoded);
      toast.success('Account created! Start doodling.');
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
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-[#7b61ff] opacity-[0.07] blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-[#00f0ff] opacity-[0.07] blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff3dff] opacity-[0.03] blur-[150px] rounded-full" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/">
            <div className="text-3xl sm:text-4xl inline-block">
              ძთძℓ౿
              <span className="px-1.5 py-0.5 text-[#00f0ff] glow-text-cyan">ᦓραс౿</span>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="glass-strong rounded-2xl p-8 sm:p-10">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Create your space
            </h1>
            <p className="text-white/40">
              Join and start drawing with others
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                {...register('name')}
                label="Name"
                type="text"
                placeholder="John Doe"
                className="w-full"
              />
              <Input
                {...register('password')}
                label="Password"
                type="password"
                placeholder="Min 5 chars"
                className="w-full"
              />
            </div>

            <Input
              {...register('email')}
              label="Email"
              type="email"
              placeholder="you@example.com"
              className="w-full"
            />

            {errors.name ? (
              <Error text={errors.name?.message} />
            ) : errors.password ? (
              <Error text={errors.password?.message} />
            ) : (
              <Error text={errors.email?.message} />
            )}

            <Button
              disabled={isSubmitting}
              className={isSubmitting ? "opacity-50" : ""}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Creating account...
                </span>
              ) : "Create account"}
            </Button>
          </form>

          <div className="mt-6 text-center text-white/40">
            Already have an account?{" "}
            <Link href="/signin" className="text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
