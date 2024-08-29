import { Metadata } from 'next';
import { login, signup } from './action';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createClient } from '@/utils/supabase/client';
import { Separator } from '@/components/ui/separator';
import { OAuthForm } from './_components/OAuthForm';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account to access your dashboard',
};

export default function AuthenticationPage() {
  const supabase = createClient();
  return (
    <>
      <div className="container relative flex h-[91vh] flex-col items-center justify-center font-display md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-indigo-800 dark:bg-slate-800" />
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="block items-center justify-center self-center md:flex lg:hidden">
              <Image src="/icon.png" alt="logo" width={48} height={48} />
            </div>
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="font-semibold tracking-tight text-2xl">
                Login with Email
              </h1>
            </div>
            <form className="flex flex-col gap-3">
              <div>
                <label htmlFor="email">Email:</label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <Input id="password" name="password" type="password" required />
              </div>
              <div className="flex justify-center gap-5">
                <Button formAction={login} variant="outline">
                  Log in
                </Button>
                <Button formAction={signup}>Sign up</Button>
              </div>
            </form>
            <Separator />
            <OAuthForm />
          </div>
          <p className="py-3 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our privacy policy.
          </p>
        </div>
      </div>
    </>
  );
}
