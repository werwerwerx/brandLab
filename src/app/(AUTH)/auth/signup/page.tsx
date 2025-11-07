'use client'

import Image from "next/image";
import { SignupForm } from "./_form";
import { Logo } from "@/shared/components/logo";
import Link from "next/link";
import { FieldSeparator } from "@/shared/components/ui-kit/field";
import { DiscordButton, GitHubButton, GoogleButton } from "../_sso.buttons";
import { FormProvider } from "../_form-context";

export default function SignupPage() {
  return (
    <FormProvider>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs flex flex-col gap-6">
              <SignupForm />
              <FieldSeparator>Или продолжите с</FieldSeparator>
              <div className="flex flex-row gap-2 w-full justify-center">
                <GitHubButton />
                <GoogleButton />
                <DiscordButton />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <Image
            src={"/images/promo1.avif"}
            alt="signup-image"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </FormProvider>
  );
}

