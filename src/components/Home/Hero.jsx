import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="px-4 py-24 text-center bg-[url('/carro-hero.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-6xl">
        <span className="text-sm uppercase tracking-[0.3em] text-brand">
          Locação premium
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold text-zinc-100 sm:text-6xl">
          Alugue o carro importado dos seus sonhos
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-zinc-200">
          Frota premium com os melhores modelos da Alemanha, Estados Unidos e
          Reino Unido.
        </p>
        <Link
          to="/carros"
          className="mt-10 inline-block rounded-lg bg-brand px-8 py-3 font-semibold text-zinc-950 transition hover:brightness-110"
        >
          Ver frota
        </Link>
      </div>
    </section>
  );
};

export default Hero;
