"use client";
const Navbar = () => {
    return (
        <nav className="w-full bg-transparent shadow-md">
        <div className="container flex mx-auto items-center justify-between p-4">
            <h1 className="text-2xl fond-bold text-black">Landing Page </h1>
            <ul className="hidden space-x-6 md:flex">
            <li>
                <a href="/" className="text-black hover:text-grey-600">Home</a>
            </li>

            <li>
                <a href="/" className="text-black hover:text-grey-600">About Us</a>
            </li>

            <li>
                <a href="/" className="text-black hover:text-grey-600">Contact Us</a>
            </li>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded space-x-2 "> 
                    SignUp 
                </button>
            </div>

            </ul>
        </div>
        </nav>
    )
}

export default Navbar;