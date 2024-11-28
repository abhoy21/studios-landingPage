const Navbar = () => {
  return (
    <div className='pt-4'>
      <div className='container mx-auto flex justify-between items-center w-full h-16 px-4 py-2'>
        <div className='flex items-center'>
          <div>
            <h1 className='text-xl font-montserrat font-semibold mr-4 tracking-widest'>
              STUDIOS
            </h1>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-2 animate-pulse' />
              <p className='text-md font-mono'>WELCOME!</p>
            </div>
          </div>
          <button className='rounded-md bg-none text-lg font-mono tracking-wider ml-8 px-16 py-2'>
            Innovate. Create. Elevate.
          </button>
        </div>

        <div className='flex items-center'>
          <ul className='flex space-x-12 font-mono'>
            <li className='text-gray-600 hover:text-gray-800 cursor-pointer text-lg font-semibold'>
              ARTISTS
            </li>
            <li className='text-gray-600 hover:text-gray-800 cursor-pointer text-lg font-semibold'>
              STUDIO
            </li>
            <li className='text-gray-600 hover:text-gray-800 cursor-pointer text-lg font-semibold'>
              BLOG
            </li>
            <li className='text-gray-600 hover:text-gray-800 cursor-pointer text-lg font-semibold'>
              INFO
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
