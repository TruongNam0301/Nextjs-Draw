import { useMutation } from "convex/react";
import { useState } from "react";

const useApiMutation = (mutationFunc: any) => {
   const [pending, setPending] = useState(false);
   const apiMutation = useMutation(mutationFunc);

   const mutate = (payload: any) => {
      setPending(true);
      return apiMutation(payload)
         .then((res) => res)
         .catch((err) => {
            throw err;
         })
         .finally(() => setPending(false));
   };
   return { mutate, pending };
};

export default useApiMutation;
