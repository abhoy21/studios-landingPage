const Footer = () => {
  return (
    <div className='relative'>
      <footer className='bg-black text-white sticky bottom-0 w-full py-4 px-6 z-20'>
        <div className='flex justify-between items-center text-xs'>
          <div>
            ©2024 STUDIOS
            <br />
            ALL RIGHTS RESERVED
          </div>

          <div className='flex space-x-4'>
            <a href='/privacy' className='hover:text-gray-300'>
              PRIVACY POLICY
            </a>
            <a href='/terms' className='hover:text-gray-300'>
              TERMS OF USE
            </a>
          </div>

          <div className='text-right'>
            DESIGN & DEVELOPMENT
            <br />
            BY{" "}
            <a href='#' className='hover:text-gray-300'>
              ABHOY SARKAR
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
