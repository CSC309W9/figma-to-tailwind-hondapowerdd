export default function Home() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#db4439] to-[#75241e] flex flex-col items-center">
            {/* Navigation Bar */}
            <nav className="w-full max-w-[1400px] flex justify-between items-center py-6 px-8 text-white text-xl font-bold">
                <div className="flex gap-8">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Menu</a>
                    <a href="#" className="hover:underline">Login</a>
                </div>
                <button className="bg-[#eaecd7] text-[#db4439] font-black py-2 px-6 rounded-full shadow-md">
                    Click
                </button>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px] mt-20 px-8">
                {/* Text Section */}
                <div className="text-white lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-6xl font-black font-['Jersey_25'] leading-tight">BlaBla Coffe!</h1>
                    <p className="text-2xl mt-4 font-semibold">Your No.1 Choice</p>
                </div>

                {/* Image Section */}
                <div className="relative w-[350px] h-[400px] transform -rotate-9 lg:w-[400px] lg:h-[450px]">
                    <div className="absolute inset-0 bg-gray-300 rounded-lg shadow-lg" />
                    <img
                        src="https://coffe_image.com"
                        alt="Coffee shop"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-white py-6 mt-20 text-center text-[#db4439] font-bold flex flex-wrap justify-around text-lg px-8">
                <a href="#" className="hover:underline">Contact Information</a>
                <a href="#" className="hover:underline">Company Policy</a>
                <a href="#" className="hover:underline">Be our partner today</a>
            </footer>
        </div>
    );
}
