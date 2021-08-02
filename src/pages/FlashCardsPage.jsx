import FlashCard from '../components/FlashCard';
import Header from '../components/Header';
import Main from '../components/Main';
import FlashCards from '../components/FlashCards';
import { allFlashCards } from '../data/allFlashCards';
import Button from '../components/Button';
import { useState } from 'react';
import { helperShuffleArray } from '../helpers/arrayHelpers';
import RadioButton from '../components/RadioButton';

const FlashCardsPage = () => {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  const handleButtonClick = () => {
    setAllCards(helperShuffleArray(allCards));
  };

  const handleShowTitleRadioButtonChange = () => {
    const updatedCards = [...allCards].map(card => ({
      ...card,
      showTitle: true,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(true);
  };

  const handleShowDescriptionRadioButtonChange = () => {
    const updatedCards = [...allCards].map(card => ({
      ...card,
      showTitle: false,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(false);
  };

  const handleToggleFlashCard = id => {
    const updatedCards = [...allCards];
    const cardIndex = updatedCards.findIndex(card => card.id === id);
    const card = updatedCards[cardIndex];
    card.showTitle = !card.showTitle;
    setAllCards(updatedCards);
  };

  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar cards</Button>
        </div>

        <div className="flex items-center justify-center space-x-2 my-4">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            checked={radioButtonShowTitle}
            onRadioButtonChange={handleShowTitleRadioButtonChange}
          >
            Mostrar título
          </RadioButton>
          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            checked={!radioButtonShowTitle}
            onRadioButtonChange={handleShowDescriptionRadioButtonChange}
          >
            Mostrar descrição
          </RadioButton>
        </div>

        <FlashCards>
          {allCards.map(({ id, title, description, showTitle }) => (
            <FlashCard
              key={id}
              id={id}
              title={title}
              description={description}
              showFlashCardTitle={showTitle}
              onToggleFlashCard={handleToggleFlashCard}
            />
          ))}
        </FlashCards>
      </Main>
    </>
  );
};

export default FlashCardsPage;
