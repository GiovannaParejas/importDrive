import Card from "../Card";
import carros from "../../data/carros";

const Destaques = ({children}) => {

  return (
    <section className="mx-auto max-w-6xl px-4 pt-16">
      <h2 className="text-2xl font-bold">Destaques da frota</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
};

export default Destaques;
