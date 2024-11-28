const TextLoop = () => {
  const texts = [
    {
      title: "Spotify",
      subtitle: "The world's most popular music streaming service",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Netflix",
      subtitle: "The world's most popular streaming service",
      color: "from-red-500 to-red-700",
    },
    {
      title: "YouTube",
      subtitle: "The world's most popular video streaming service",
      color: "from-rose-500 to-rose-700",
    },
    {
      title: "Amazon",
      subtitle: "The world's most popular e-commerce company",
      color: "from-orange-500 via-orange-900 to-black",
    },
    {
      title: "Apple",
      subtitle: "The world's most popular technology company",
      color: "from-gray-500 to-gray-900",
    },
    {
      title: "Google",
      subtitle: "The world's most popular search engine",
      color: "from-blue-500 via-yellow-500 to-green-500",
    },
    {
      title: "Facebook",
      subtitle: "The world's most popular social media platform",
      color: "from-indigo-500 to-indigo-700",
    },
  ];

  const loopedTexts = [...texts, ...texts];

  return (
    <div className='text-loop-container'>
      <div className='text-loop'>
        {loopedTexts.map((text, index) => (
          <div
            key={index}
            className='text-item flex items-center space-x-6 px-8 group'
          >
            <div className='flex flex-col items-center'>
              <h1
                className={`
                text-4xl font-montserrat font-bold uppercase 
                bg-gradient-to-r ${text.color} 
                text-transparent bg-clip-text
                transition-all duration-300 
                group-hover:scale-105
              `}
              >
                {text.title}
              </h1>
            </div>
            <div className='h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300'></div>
            <p className='text-lg font-bold font-mono text-gray-500 break-words'>
              {text.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextLoop;
