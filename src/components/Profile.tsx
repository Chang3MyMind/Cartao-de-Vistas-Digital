import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex justify-center items-center mt-2 sm:mt-4">
      <Image
        src={"/Face_Foto.png"}
        alt="Imagem de um rapaz"
        width={200}
        height={200}
        quality={100}
        className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
      />
    </div>
  );
}
