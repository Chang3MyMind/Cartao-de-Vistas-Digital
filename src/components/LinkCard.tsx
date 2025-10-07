type BdData = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: BdData) {
  return (
    <div className="justify-center items-center flex">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div>
          <h3>{title}</h3>
        </div>
      </a>
    </div>
  );
}
