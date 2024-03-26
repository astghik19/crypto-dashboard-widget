import {memo} from 'react'

const Header = () => {

  return (
    <header className="bg-white border-b-2 mb-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
          </a>
        </div>
        <div>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </a>
        </div>
      </nav>
    </header>
  )
}

export default memo(Header);