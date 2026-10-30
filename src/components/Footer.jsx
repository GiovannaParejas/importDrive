const ano = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-950/90 p-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-sm text-zinc-200 sm:flex-row sm:justify-between">
        <p>
          Import<span className="text-brand">Drive</span> | Locação de Carros Importados
        </p>
        <p>© {ano} | Turma 1ESPI | Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer