import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
              <div className="container">
                <Link to="/" className="navbar-brand">Redux book</Link>
                <div>
                    <Link to="/contact/add" className="btn btn-light ml-auto">
                        Create contact
                    </Link>
                </div>
              </div>
            </nav>
        </div>
    )
}
