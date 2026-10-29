const VantagensCard = ({titulo, texto}) => {
  return (
    <div className="rounded-2xl border border-zinc-800 py-6 px-8">
      <h3 className="font-semibold text-brand text-xl">{titulo}</h3>
      <p className="mt-2 text-sm text-zinc-300">{texto}</p>
    </div>
  );
};

export default VantagensCard;
