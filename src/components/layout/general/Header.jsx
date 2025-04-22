import React from 'react'

export const Header = () => {
  return (
    <header className="layout__navbar">

            <div className="navbar__header">
                <a href="#" className="navbar__title">NGSOCIAL</a>
            </div>

            <nav className="navbar__container-lists">

                <ul className="container-lists__menu-list">
                    <li className="menu-list__item">
                        <a href="#" className="menu-list__link">
                            <i className="fa-solid fa-house"></i>
                            <span className="menu-list__title">Inicio</span>
                        </a>
                    </li>

                    <li className="menu-list__item">
                        <a href="#" className="menu-list__link">
                            <i className="fa-solid fa-list"></i>
                            <span className="menu-list__title">Timeline</span>
                        </a>
                    </li>

                    <li className="menu-list__item">
                        <a href="#" className="menu-list__link">
                            <i className="fa-solid fa-user"></i>
                            <span className="menu-list__title">Gente</span>
                        </a>
                    </li>

                    <li className="menu-list__item">
                        <a href="#" className="menu-list__link">
                            <i className="fa-regular fa-envelope"></i>
                            <span className="menu-list__title">Mensajes</span>
                        </a>
                    </li>
                </ul>

                <ul className="container-lists__list-end">
                    <li className="list-end__item">
                        <a href="#" className="list-end__link-image">
                            <img src="assets/img/user.png" className="list-end__img" alt="Imagen de perfil" />
                        </a>
                    </li>
                    <li className="list-end__item">
                        <a href="#" className="list-end__link">
                            <span className="list-end__name">Victor</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </a>
                    </li>
                </ul>

            </nav>

        </header>

  )
}
