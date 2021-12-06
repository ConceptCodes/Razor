import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="flex">
            <div className="flex">
                <h1 className="text-3xl">Razor</h1>
            </div>
            <div className="flex">
                <Link href="">Services</Link>
                <Link href="">Company</Link>
            </div>
            <div className="flex space-x-3">
                <Link href="">Become a Freelancer</Link>
                <Link href="">Sign up</Link>
                <Link href="">Sign in</Link>
                <button className="p-3 border border-white">Order 3D Print</button>
            </div>
        </nav>
    )
}
