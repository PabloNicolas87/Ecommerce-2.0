import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container d-flex flex-column">
                <div className="w-100 d-flex">
                    <div className='col-12 col-lg-2 d-flex justify-content-between'>
                        <a className="navbar-brand">Hidden brand</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>      
                    </div>
                      
                    <div className='col-lg-8'>
                        <form className="d-none d-lg-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    
                    <div className='col-lg-2'>
                        <a className="navbar-brand d-none d-lg-flex align-items-center justify-content-lg-end">
                                <span className="me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                </svg>
                                </span>
                                <span>Rastrear Pedido</span>
                            </a>
                </div>  
            </div>
                    

                {/* Menú de navegación */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <form className="d-lg-none d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                </div>                
            </div>  
        </nav>
    )
}

export default Navbar;
