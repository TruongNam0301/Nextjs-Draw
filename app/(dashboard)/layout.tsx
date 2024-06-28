import "../globals.css";
import React from "react";
import SideBar from "./_components/sidebar";
import OrgSidebar from "./_components/org-sidebar";
import Navbar from "./_components/navbar";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/providers/modal-provider";

function DashboardLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body>
            <ConvexClientProvider>
               <Toaster />
               <ModalProvider />
               <main className="h-full">
                  <SideBar />
                  <div className=" pl-[60px] h-full">
                     <div className=" flex gap-x-3 h-full">
                        <OrgSidebar />
                        <div className=" flex-1 h-full">
                           <Navbar /> {children}
                        </div>
                     </div>
                  </div>
               </main>
            </ConvexClientProvider>
         </body>
      </html>
   );
}

export default DashboardLayout;
