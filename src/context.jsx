import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export const useGlobalContext = () => useContext(AppContext)

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)

  const [pageId, setPageId] = useState(null)

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        pageId,
        setPageId,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
