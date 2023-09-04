import { useNavigate } from 'react-router-dom';

type IHeaderProps = {
  pageName: string
};

function Header({ pageName }: IHeaderProps) {
  const navigate = useNavigate();

  return (
    <header
      className="flex flex-row justify-between justify-items-center items-center
       p-4 bg-slate-500 text-3xl"
    >
      <p
        className="p-2 text-yellow-50 font-bold ml-96"
      >
        {pageName}
      </p>
      <button
        type="button"
        className="p-2 bg-slate-800 text-white rounded-xl text-lg
        hover:bg-white hover:text-black"
        onClick={ () => navigate('/home') }
      >
        Voltar menu inicial
      </button>
    </header>
  );
}

export default Header;
