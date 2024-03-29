import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="text-center">
        <h1 className="font-poppins font-black sm:text-9xl text-6xl text-sky-500">
          Oi, eu sou Bruno.
        </h1>
        <h3 className="text-gray-700 text-3xl max-sm:text-center max-sm:text-2xl sm:text-3xl mt-1 ml-1 text-left font-thin">
          Software Developer
        </h3>
        <p className="xl:w-2/3 max-w-[750px] max-sm:w-[300px] max-sm:text-center max-sm:m-auto max-sm:mt-10 text-left sm:w-96 text-xl font-light mt-10 text-gray-700">
          Nascido e criado no Rio de Janeiro, há pouco mais de 1 ano embarquei
          no estudo do mundo da tecnologia. Sua constante evolução e
          possibilidades têm me cativado de forma crescente. Estou animado para
          continuar aprendendo e explorando tudo o que esse universo tem a
          oferecer.
        </p>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 animate-pulse"
        aria-hidden="true"
        style={{
          animationDuration: "3s", // Ajuste a duração conforme necessário
          animationIterationCount: "infinite", // Para repetir infinitamente
        }}
      >
        <div
          className="aspect-[1055/778] w-[77.1875rem] max-sm:w-[20.1875rem] bg-gradient-to-tr from-[#96cdfa] to-[#0c80ec] opacity-40 max-sm:opacity-100 "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
        <div
          className="aspect-[1055/778] w-[77.1875rem] max-sm:mt-96 max-sm:w-[20.1875rem] bg-gradient-to-tr from-[#96cdfa] to-sky-500 opacity-30 max-sm:opacity-90 "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
        
      </div>
    </div>
  );
}
