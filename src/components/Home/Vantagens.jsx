import VantagensCard from "./VantagensCard";

const Vantagens = () => {
  return (
    <section className="p-6 text-center">
      <h2 className="text-2xl sm:text-3xl p-6 text-zinc-100 font-semibold">Vantagens</h2>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3">
        <VantagensCard
          titulo="Seguro completo"
          texto="Proteção total inclusa em todas as locações."
        />
        <VantagensCard
          titulo="Entrega no endereço"
          texto="Levamos o carro até você em São Paulo."
        />
        <VantagensCard
          titulo="Sem burocracia"
          texto="Reserva rápida e aprovação no mesmo dia."
        />
      </div>
    </section>
  );
};

export default Vantagens;
