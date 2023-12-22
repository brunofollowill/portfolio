export default function Contact() {
  return (
    <div className="flex justify-center bg-gray-50 h-[400px] mt-20">
      <div className="m-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
          Assine minha newsletter.
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Mantenha-se informado sobre meus projetos mais recentes.
        </p>
        <div className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Digite seu e-mail
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-2 border-gray-300 bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Digite seu e-mail"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Se inscrever
          </button>
        </div>
      </div>
    </div>
  );
}
