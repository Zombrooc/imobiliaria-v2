import PropertyItem from "@/components/PropertyItem";

export default function PropertyList({ properties }) {
  return (

    <div className=" rounded-xl shadow-md p-8 bg-slate-100">
      <h1 className="text-2xl font-bold">
        {" "}
        Conheça alguns dos nossos imóveis{" "}
      </h1>
      <hr className="my-5" />
      <div className="w-full flex flex-wrap cont">
        {properties.length > 0 && properties.map(property => {
          return (<PropertyItem key={property.id + + Math.random()} property={property} />)
        }) || <h2> Nenhuma propriedade a ser exibida no momento.</h2>}
      </div>
    </div>
  );
}