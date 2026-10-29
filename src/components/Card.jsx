
const FALLBACK = "https://placehold.co/800x450/18181b/c9a227?text=Import+Drive";

const Card = ({carro}) => {
  const preco = carro.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleClick = () => {
    alert('Mais informações foram enviadas para o seu email!');
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-brand/60">
      <img
        src={carro.imagem}
        alt={carro.nome}
        loading="lazy"
        onError={(e) => (e.currentTarget.src = FALLBACK)}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs uppercase tracking-widest text-zinc-400">
          {carro.marca} | {carro.origem}
        </span>
        <h3 className="mt-1 text-lg font-semibold">{carro.nome}</h3>
        <span className="mt-2 w-fit rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
          {carro.categoria}
        </span>
        <div className="mt-auto flex items-center justify-between pt-5">
          <p>
            <span className="text-xl font-bold text-brand">{preco}</span>
            <span className="text-sm text-zinc-400"> / dia</span>
          </p>
          <button className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-brand/70" onClick={handleClick}>
            Alugar
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
