import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import StoreProvider from "../StoreProvider"
import { Toaster } from "react-hot-toast"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-grow bg-white">
        <SidebarTrigger />
        {/* {children} */}
        <Toaster position="top-right"/>
        <StoreProvider>{children}</StoreProvider>
      </main>
    </SidebarProvider>
  )
}

