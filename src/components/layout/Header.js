import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function Header() {
    const { links } = useSelector(state=> state.siteHeader)
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">بانک سپه</a>
                <button className='btn btn-sm btn-primary'>ثبت نام / ورود</button> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        links.length > 0 && 
                        links.map((link,index) => {
                            
                            return (
                            <li key={index} className={`navitem ${link.dropdown ? 'dropdown' : ""}`}>
                                {
                                    !link.dropdown ?
                                    <Link className="nav-link active" aria-current="page" to={link.url} >{link.title}</Link>
                                    : 
                                    
                                    <>
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {link.title}
                                        </a>
                                        <ul className="dropdown-menu" style={{textAlign: 'right', padding: '4px'}}>
                                            {
                                                link.children.map((child,index) => <li key={index}><a className="dropdown-item" href={child.childurl}>{child.childtitle}</a></li>)
                                            }
                                        </ul>
                                    </>
                                }
                            </li>
                        )})
                    }
                </ul>
                </div>
            </div>
        </nav>
    )
}