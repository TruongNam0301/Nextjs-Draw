import Image from "next/image";

type Props = {};

const EmptySearch = (props: Props) => {
   return (
      <div className=" h-full flex flex-col items-center justify-center">
         <Image src={"/empty-search.svg"} height={140} width={140} alt="empty-seach" />
         <h2 className=" text-2xl font-semibold flex-col items-center">No results found</h2>
         <p className=" text-muted-foreground textg\-sm mt-2"> Try searching for something else</p>
      </div>
   );
};

export default EmptySearch;
