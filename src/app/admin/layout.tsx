import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import StoreProvider from "../StoreProvider"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-grow bg-white">
        <SidebarTrigger />
        {/* {children} */}
        <StoreProvider>{children}</StoreProvider>
      </main>
    </SidebarProvider>
  )
}

