import { useState } from 'react';

import TextArea from './TextArea';
import TextInput from './TextInput';

const FlashCardForm = ({ createMode = true }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const backgroundClassName = createMode ? 'bg-green-100' : 'bg-yellow-100';

  const handleTitleChange = newTitle => setTitle(newTitle);
  const handleDescriptionChange = (newDescription) => setDescription(newDescription);

  return (
    <form className={`${backgroundClassName} p-4`}>
      <h2 className="text-center font-semibold">Manutenção de Flash Cards</h2>

      <TextInput
        labelDescription="Título:"
        inputValue={title}
        onInputChange={handleTitleChange}
      />
      <TextArea
        labelDescription="Descrição:"
        textAreaValue={description}
        onTextAreaChange={handleDescriptionChange}
      />
    </form>
  );
};

export default FlashCardForm;
