import getBdData from "@/api/getBdData";

type BdData = {
  id: number;
  title: string;
  url: string;
};

export default async function Home() {
  const data = await getBdData();

  return;
}
