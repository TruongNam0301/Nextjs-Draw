import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

type Props = {};

const EmptyOrg = (props: Props) => {
   return (
      <div className=" h-full flex flex-col items-center justify-center">
         <Image src="/next.svg" alt="empty/" height={200} width={200} />
         <h2 className="text-2xl font-semibold mt-6"> Welcom to Board</h2>
         <p> Create an orgination to get started</p>
         <Dialog>
            <DialogTrigger asChild>
               <Button size={"lg"}>Create organization</Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
               <CreateOrganization routing="hash" />
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default EmptyOrg;
