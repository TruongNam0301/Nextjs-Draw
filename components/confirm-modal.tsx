"use client";

import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
   children: React.ReactNode;
   onConfirm: () => void;
   disabled?: boolean;
   header: string;
   description?: string;
}

const ConfirmModal = ({ children, onConfirm, disabled, header, description }: ConfirmModalProps) => {
   return (
      <AlertDialog>
         <AlertDialogTrigger>{children}</AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>{header}</AlertDialogTitle>
               <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel>Cancel</AlertDialogCancel>
               <AlertDialogAction
                  disabled={disabled}
                  onClick={() => {
                     onConfirm();
                  }}
               >
                  Confirm
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
};

export default ConfirmModal;