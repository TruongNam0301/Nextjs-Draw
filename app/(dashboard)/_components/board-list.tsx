import { useQuery } from "convex/react";
import EmptyBoard from "./empty-board";
import EmptyFavor from "./empty-favor";
import EmptySearch from "./empty_search";
import { api } from "@/convex/_generated/api";
import BoardCard from "./board-card";
import { NewBoardButton } from "./new-board-button";

type Props = {
   orgId: string;
   query: { search?: string; favorite?: string };
};

const BoardList = ({ orgId, query }: Props) => {
   const data = useQuery(api.boards.get, {
      orgId,
      favorites: query?.favorite,
      search: query?.search,
   });
   console.log(data);

   if (data === undefined) {
      return (
         <div>
            <h2 className="text-3xl">{query.favorite ? "Favorite boards" : "Team boards"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
               <NewBoardButton orgId={orgId} disabled />
               <BoardCard.Skeleton />
               <BoardCard.Skeleton />
               <BoardCard.Skeleton />
               <BoardCard.Skeleton />
            </div>
         </div>
      );
   }

   if (!data?.length && query.search) {
      return <EmptySearch />;
   }

   if (!data?.length && query?.favorite) {
      return <EmptyFavor />;
   }

   if (!data?.length) {
      return <EmptyBoard />;
   }
   return (
      <div>
         <h2 className=" text-3xl">{query.favorite ? "Favorite boards" : "Team Boards"}</h2>
         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
            <NewBoardButton orgId={orgId} />
            {data?.map((board) => (
               <BoardCard
                  key={board._id}
                  id={board._id}
                  title={board.title}
                  imageUrl={board.imageUrl}
                  authorId={board.authorId}
                  createdAt={board._creationTime}
                  orgId={board.orgId}
                  isFavorite={board.isFavorite}
                  authorName={board.authorName}
               />
            ))}
         </div>
      </div>
   );
};

export default BoardList;
