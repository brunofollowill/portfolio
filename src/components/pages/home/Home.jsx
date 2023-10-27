export default function Home() {
  return (
    <div>
      <div className="flex m-auto md:ml-60 ">
        <div className=" max-sm:mt-20 mt-36 m-auto">
          <h1 className="font-poppins font-black sm:text-8xl text-6xl text-sky-500">
            Oi, eu sou Bruno.
          </h1>
          <h3 className="text-stone-600 text-3xl sm:text-3xl mt-1 font-thin">
            Sou um
            <span className="text-sky-500 font-poppins text font-black">
              {" "}
              desenvolvedor web
            </span>
          </h3>
          <p className=" xl:w-2/3 sm:w-96 text-xl font-light mt-10 text-stone-600">
            Nascido e criado no Rio de Janeiro, há pouco mais de 1 ano embarquei
            no estudo do mundo da tecnologia. Sua constante evolução e
            possibilidades têm me cativado de forma crescente. Estou animado
            para continuar aprendendo e explorando tudo o que esse universo tem
            a oferecer.
          </p>
        </div>
      </div>
    </div>
  );
}
