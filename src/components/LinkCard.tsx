type BdData = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: BdData) {
  return (
    <div className="justify-center items-center flex">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <div className="bg-orange-400 px-4 py-3 sm:px-6 sm:py-4 font-semibold text-sm sm:text-base md:text-lg rounded-md hover:bg-orange-500 transition-colors duration-200 text-center shadow-md">
          <h3 className="break-words">{title}</h3>
        </div>
      </a>
    </div>
  );
}
