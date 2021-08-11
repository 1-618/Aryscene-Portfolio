import { FunctionComponent, useState, useEffect } from "react"
import Link from 'next/link'
import { useRouter } from "next/dist/client/router"

const NavItem: FunctionComponent<{
    acitveItem: string
    setActiveItem: Function
    name: string
    route: string
}> = ({ acitveItem, name, route, setActiveItem }) => {
    return acitveItem != name ? (
        <Link href={route}>
            <a>
                <span onClick={() => setActiveItem(name)} className='hover:text-green'>{name}</span>
            </a>
        </Link>
    ) : null
}

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('')

    const { pathname } = useRouter()

    useEffect(() => {
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/projects') setActiveItem('Projects')
        if (pathname === '/resume') setActiveItem('Resume')
    }, [])

    return (
        <div className='flex justify-between px-5'>
            <span className='text-xl font-bold border-b-4 text-green border-green md:text-2xl'>
                {activeItem}
            </span>
            <div className='flex space-x-5 text-lg text-red-400'>
                <NavItem
                acitveItem={activeItem}
                setActiveItem={setActiveItem}
                name='About'
                route='/'
                />
                <NavItem
                acitveItem={activeItem}
                setActiveItem={setActiveItem}
                name='Projects'
                route='/projects'
                />
                <NavItem
                acitveItem={activeItem}
                setActiveItem={setActiveItem}
                name='Resume'
                route='/resume'
                />
            </div>
        </div>
    )
}

export default Navbar
