const TextInput = ({
  id = 'id_do_input',
  labelDescription = 'Descrição da label:',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
  autoFocus = false,
}) => {
  const handleInputChange = ({ currentTarget }) => {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  };
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="{id}" className="text-sm mb-1">
        {labelDescription}
      </label>
      <input
        id={id}
        type="text"
        className="border p-1"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default TextInput;