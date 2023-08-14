import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex m-auto md:ml-60 ">
        <div className=" mt-36 m-auto">
         
            <h1 className="font-poppins font-black sm:text-8xl text-6xl text-sky-500">
              Oi, eu sou Bruno.
            </h1>
            <h3 className="text-black text-2xl sm:text-3xl mt-3 font-thin">
              Eu sou
              <span className="text-sky-500 font-poppins text font-black">
                {" "}
                desenvolvedor web
              </span>
            </h3>
            <p className=" xl:w-2/3 sm:w-96 text-xl font-light mt-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              tempora assumenda molestiae reprehenderit dolores quidem quibusdam
              esse repellendus excepturi consequuntur possimus incidunt, fuga
              natus mollitia perferendis eius adipisci ea eos.
            </p>
          
        </div>
      </div>
    </div>
  );
}
