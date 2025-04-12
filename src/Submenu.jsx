import sublinks from "./data"
import { useGlobalContext } from "./context"


function Submenu() {
  const {pageId, setPageId} = useGlobalContext()
  if (pageId === null) return
  const {links} = sublinks.find((sublink => sublink.pageId === pageId))
  console.log(links)
  return (
    <div className="submenu show-submenu" onMouseLeave={()=>setPageId(null)}>
      <div className="submenu-container">
        <div className="submenu-links">
          {links.map((link)=>{
            const {url, icon, label, id} = link 
            return <a href={url} key={id}>{icon}{label}</a>
          })}
          
        </div>
      </div>
    </div>
  )
}
export default Submenu