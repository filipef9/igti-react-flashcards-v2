import { getNewId } from '../services/idService';

const RadioButton = ({
  id = getNewId(),
  name = 'radioButtonName',
  children: buttonDescription = 'Label da opção',
  checked = false,
  onRadioButtonChange = null
}) => {
  const handleChange = () => {
    if (onRadioButtonChange) onRadioButtonChange(); 
  };

  return (
    <div className="flex items-center space-x-2">
      <input id={id} type="radio" name={name} checked={checked} onChange={handleChange} />
      <label htmlFor={id}>{buttonDescription}</label>
    </div>
  );
};

export default RadioButton;
