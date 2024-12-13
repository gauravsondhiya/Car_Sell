import React from "react";

const Category = () => {
  const Category = [
    {
      id: 1,
      name: "SUV",
      icon: "https://cdn-icons-png.flaticon.com/128/13584/13584003.png",
    },
    {
      id: 2,
      name: "Sedan",
      icon: "https://cdn-icons-png.flaticon.com/128/3202/3202003.png",
    },
    {
      id: 3,
      name: "Hatchback",
      icon: "https://cdn-icons-png.flaticon.com/128/5035/5035167.png",
    },
    {
      id: 4,
      name: "Electric",
      icon: "https://cdn-icons-png.flaticon.com/128/4564/4564336.png",
    },
    {
      id: 5,
      name: "Convertible",
      icon: "https://cdn-icons-png.flaticon.com/128/5035/5035202.png",
    },
    {
      id: 5,
      name: "Hybrid",
      icon: "https://cdn-icons-png.flaticon.com/128/3202/3202003.png",
    },
    {
      id: 5,
      name: "Coupe",
      icon: "https://cdn-icons-png.flaticon.com/128/4391/4391630.png",
    },
    {
      id: 5,
      name: "Van",
      icon: "https://cdn-icons-png.flaticon.com/128/1433/1433678.png",
    },
    {
      id: 5,
      name: "Truck",
      icon: "https://cdn-icons-png.flaticon.com/128/5814/5814855.png",
    },
  ];
  return (
    <div className="grid grid-cols-9  gap-6  border-black  my-8 mx-20">
      {Category.map((e) => (
        <div className=" hover:shadow-xl border rounded-lg border-slate-300 col-span-1 text-center">
          <img
            className=" w-14 m-auto"
            src={e.icon}
            alt=""
          />
          <p>{e.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
