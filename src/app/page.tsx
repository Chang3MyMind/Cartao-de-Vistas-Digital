import getBdData from "@/api/getBdData";

import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

type BdData = {
  id: string;
  title: string;
  url: string;
};

export default async function Home() {
  const data = await getBdData();

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-blue-400 space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
        <Profile />
        <div className="space-y-3 sm:space-y-4">
          {data.map((data: BdData) => (
            <LinkCard key={data.id} title={data.title} url={data.url} />
          ))}
        </div>
      </div>
    </main>
  );
}
