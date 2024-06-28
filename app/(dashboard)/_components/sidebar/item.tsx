import Hint from "@/components/ui/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

type Props = {
   id: string;
   imageUrl: string;
   name: string;
};

const Item = ({ id, name, imageUrl }: Props) => {
   const { organization } = useOrganization();
   const { setActive } = useOrganizationList();
   const isActive = organization?.id;
   const onClick = () => {
      if (!setActive) return;

      setActive({ organization: id });
   };
   return (
      <div className=" aspect-square relative">
         <Hint label={name} side="right" align="start" sideOffset={18}>
            <Image
               fill
               alt={name}
               src={imageUrl}
               onClick={onClick}
               className={cn(" rounded-md cursor-pointer opactity-75 hover:opacity-100", isActive && "opacity-100 ")}
            />
         </Hint>
      </div>
   );
};

export default Item;
