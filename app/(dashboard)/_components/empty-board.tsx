"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import useApiMutation from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {};

const EmptyBoard = (props: Props) => {
   const { organization } = useOrganization();
   const { mutate, pending } = useApiMutation(api.board.create);
   const router = useRouter();

   const onClick = () => {
      if (!organization) return;

      mutate({
         orgId: organization.id,
         title: "Untitle",
      })
         .then((id) => {
            toast.success(`board created `);
            router.push(`/board/${id}`);
         })
         .catch(() => {
            toast.error("failed to create board");
         });
   };
   return (
      <div className=" h-full flex flex-col items-center justify-center">
         <Image src={"/empty-search.svg"} height={140} width={140} alt="empty-seach" />
         <h2 className=" text-2xl font-semibold flex-col items-center">Create your first board</h2>
         <p className=" text-muted-foreground textg\-sm mt-2"> Start by create boardx for your organizations</p>
         <div className=" mt-6">
            <Button disabled={pending} onClick={onClick} size={"lg"}>
               Create board
            </Button>
         </div>
      </div>
   );
};

export default EmptyBoard;
