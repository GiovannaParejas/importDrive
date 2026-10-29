import { useState } from "react";
import Card from "../components/Card";
import carros from "../data/carros";

const Carros = () => {
  const [categoria, setCategoria] = useState("Todos");
  const categorias = ["Todos", ...new Set(carros.map((c) => c.categoria))];

  const filtrados =
    categoria === "Todos"
      ? carros
      : carros.filter((c) => c.categoria === categoria);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Nossa frota</h1>
      <p className="mt-2 text-zinc-400">
        Escolha o importado ideal para a sua viagem.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              categoria === cat
                ? "bg-brand font-semibold text-zinc-950"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}
      </div>
    </section>
  );
};

export default Carros;
