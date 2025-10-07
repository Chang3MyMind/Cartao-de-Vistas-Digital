import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={"/Face_Foto.png"}
        alt="Imagem de um rapaz"
        width={200}
        height={200}
        quality={100}
        className=" rounded-full mt-4"
      />
    </div>
  );
}
