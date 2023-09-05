import React from 'react';

type FieldSetProps = {
  value: string | number,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  name: string,
  type: string,
  id: string,
  labelText: string,
  placeholder: string
};

function FieldSet(props: FieldSetProps) {
  const { value,
    handleChange,
    name,
    type,
    id,
    labelText,
    placeholder,
  } = props;

  return (
    <fieldset
      className="p-2 flex flex-row flex-nowrap justify-items-center items-center
     w-full  justify-start mb-2"
    >
      <label htmlFor={ id } className="w-28">
        {labelText}
      </label>
      <input
        type={ type }
        name={ name }
        value={ value }
        id={ id }
        className="p-2 bg-white placeholder:italic rounded-lg
        text-sm placeholder:text-xs w-72 mt-2"
        placeholder={ placeholder }
        onChange={ handleChange }
      />
    </fieldset>
  );
}

export default FieldSet;
