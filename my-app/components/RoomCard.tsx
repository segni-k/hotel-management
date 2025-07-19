import Image from "next/image";

type RoomCardProps = {
    name: string;
    description: string;
    image: string;
    price: string;
  };
  
  const RoomCard = ({ name, description, image, price }: RoomCardProps) => (
    <div className="p-4 rounded-lg shadow-lg">
  

        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className=" w-full h-48 object-cover rounded-md mb-4"
        />
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{name}</h3>
      <p className="text-gray-600 mb-4 dark:text-gray-400">{description}</p>
      <p className="font-semibold text-blue-600">{price}</p>
    </div>
  );
  
  export default RoomCard;
  
