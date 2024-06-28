import Image from "next/image";

type Props = {};

const EmptyFavor = (props: Props) => {
   return (
      <div className=" h-full flex flex-col items-center justify-center">
         <Image src={"/empty-search.svg"} height={140} width={140} alt="empty-seach" />
         <h2 className=" text-2xl font-semibold flex-col items-center">No favorite board</h2>
         <p className=" text-muted-foreground textg\-sm mt-2"> Try favoriting boards</p>
      </div>
   );
};

export default EmptyFavor;
