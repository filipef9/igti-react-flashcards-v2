import FlashCard from '../components/FlashCard';
import Header from '../components/Header';
import Main from '../components/Main';
import FlashCards from '../components/FlashCards';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { helperShuffleArray } from '../helpers/arrayHelpers';
import RadioButton from '../components/RadioButton';
import { apiGetAllFlashCards } from '../services/flashcardService';
import Loading from '../components/Loading';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const FlashCardsPage = () => {
  const [error, setError] = useState('');
  useEffect(() => {
    if (!!error) {
      toast.error('Oops! Algo deu errado!!!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiGetAllFlashCards()
      .then(flashCards => {
        setAllCards(flashCards);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch(error => {
        console.log('error:', error.message);
        setAllCards([]);
        setLoading(false);
        setError(error.message);
      });
  }, []);

  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  const handleShuffleCards = () => {
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

      {!!error && <ToastContainer />}

      {loading ? (
        <div className="flex justify-center my-5">
          <Loading />
        </div>
      ) : (
        <Main>
          <Tabs>
            <TabList>
              <Tab>Listagem</Tab>
              <Tab>Cadastro</Tab>
              <Tab>Estudo</Tab>
            </TabList>

            <TabPanel>
              <h2>Listagem Content</h2>
            </TabPanel>

            <TabPanel>
              <h2>Cadastro Content</h2>
            </TabPanel>

            <TabPanel>
              <div className="text-center mb-4">
                <Button onButtonClick={handleShuffleCards}>
                  Embaralhar cards
                </Button>
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
            </TabPanel>
          </Tabs>
        </Main>
      )}
    </>
  );
};

export default FlashCardsPage;
