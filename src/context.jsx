import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export const AppProvider = ({ childerne: children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
