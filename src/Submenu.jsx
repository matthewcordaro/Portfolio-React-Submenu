import sublinks from "./data"
import { useGlobalContext } from "./context"
import { useRef } from "react"

function Submenu() {
  const { pageId, setPageId } = useGlobalContext()
  const currentPage = sublinks.find((sublink) => sublink.pageId === pageId)
  const submenuContainer = useRef(null)
  function mouseLeaveHandler(e) {
    const { clientX, clientY } = e
    const submenu = submenuContainer.current
    const { bottom, left, right } = submenu.getBoundingClientRect()
    if (bottom > clientY || left < clientX || right > clientX) {
      setPageId(null)
    }
  }
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={mouseLeaveHandler}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { url, icon, label, id } = link
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
export default Submenu
