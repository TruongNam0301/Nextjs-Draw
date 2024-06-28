"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const InviteButton = (props: Props) => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant={"outline"}>
               <Plus className=" w-4 h-4 mr-2" />
               Invite members
            </Button>
         </DialogTrigger>
         <DialogContent className=" p-0 bg-transparent border-none max-w-[880px]">
            <OrganizationProfile />
         </DialogContent>
      </Dialog>
   );
};

export default InviteButton;