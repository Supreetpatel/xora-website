const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
        <div className="container flex h-14 items-center max-lg:px-5">
            <a className="lg:hideen flex-1 cursor-pointer z-2">
             <img src="/images/xora.svg" width={115} height={55} alt="logo"/>
            </a>
            <div className="w-full border-2 border-amber-400">
              <nav>
                <ul className="max-lg:block flex max-lg:px12">
                  <li className="nav-li">
                    {/*{NavLink}*/}
                  </li>
                </ul>
              </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
