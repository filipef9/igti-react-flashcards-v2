import { getNewId } from '../services/idService';

export const TextArea = ({
  id = getNewId(),
  labelDescription = 'Descrição da label:',
  textAreaValue = 'Valor padrão do textarea',
  onTextAreaChange = null,
  maxLength = 230,
  rows = 4,
}) => {
  const handleTextAreaChange = ({ currentTarget }) => {
    if (onTextAreaChange) {
      const newValue = currentTarget.value;
      onTextAreaChange(newValue);
    }
  };
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="{id}" className="text-sm mb-1">
        {labelDescription}
      </label>
      <textarea
        id={id}
        type="text"
        className="border p-1"
        maxLength={maxLength}
        rows={rows}
        value={textAreaValue}
        onChange={handleTextAreaChange}
      />
    </div>
  );
};

export default TextArea;
