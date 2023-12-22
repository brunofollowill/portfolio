import Rectangle from "../../Rectangle";

export default function Projects() {
  return (
    <div className="w-3/5 m-auto mt-20 ">
      <h1 className=" font-black text-4xl border-b-2 text-slate-600 border-slate-200 w-[250px]">
        Projetos
      </h1>
      <div className="grid grid-rows-2 grid-flow-col gap-1">
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </div>
    </div>
  );
}
