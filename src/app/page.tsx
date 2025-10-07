import getBdData from "@/api/getBdData";

import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

type BdData = {
  id: number;
  title: string;
  url: string;
};

export default async function Home() {
  const data = await getBdData();

  return (
    <div className="space-y-4">
      <Profile />
      {data.map((data: BdData) => (
        <LinkCard key={data.id} title={data.title} url={data.url} />
      ))}
    </div>
  );
}
