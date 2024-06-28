"use client";

import { Loading } from "@/components/ui/auth/loading";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";

type Props = {
   children: React.ReactNode;
};

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: Props) => {
   return (
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
         <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <Authenticated>{children}</Authenticated>
            <AuthLoading>
               <Loading />
            </AuthLoading>
         </ConvexProviderWithClerk>
      </ClerkProvider>
   );
};
