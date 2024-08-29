'use client';

import * as React from 'react';

import { Icons } from '@/components/sample/icons';
import { cn } from '@/lib/utils';
import { socialLogin } from '@/app/login/action';
import { Button } from '@/components/ui/button';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function OAuthForm({ className, ...props }: UserAuthFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Button
        variant="outline"
        onClick={() => {
          socialLogin('google');
        }}
        type="button">
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          socialLogin('github');
        }}
        type="button">
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  );
}
