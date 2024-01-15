import Rectangle from "../../Rectangle";

export default function Projects() {
  return (
    <div className="w-3/5 justify-center mt-20 max-sm:flex max-sm:flex-col items-center mx-auto">
      <h1 className="font-black text-4xl border-b-2 text-slate-600 border-slate-200 w-[250px]">
        Projetos
      </h1>
      <div className="max-sm:grid-rows-4 grid grid-rows-2 grid-flow-col gap-1">
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </div>
    </div>
  );
}
