import { useNavigate } from 'react-router-dom';

type IButtonProps = {
  nameBtn: string,
  path: string
};

function BtnForm({ nameBtn, path }: IButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="text-lg p-2 bg-slate-800 text-white rounded-lg shadow-lg
       hover:bg-slate-500 hover:text-black"
      onClick={ () => navigate(`/${path}`) }
    >
      {nameBtn}
    </button>
  );
}

export default BtnForm;
