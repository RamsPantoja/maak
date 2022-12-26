import { 
  CreateXSell,
  Slogan,
} from '../pagesStyles/index';

//Componentes
import BackgroundAnimation from '../components/BackgroundAnimationComponent/BackgroundAnimation';
import MaakLayout from '../components/Layout/MaakLayout';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { useEffect } from 'react';
import { types } from '../store/storeReducer';

const Home = () => {
  const [store, dispatch] = useContext(StoreContext);

  useEffect(() => {
    dispatch({
      type: types.onChangeTheme,
      payload: localStorage.getItem('theme')
    })
  },[store.theme, dispatch]);

  return (
    <MaakLayout>
        <BackgroundAnimation>
          <Slogan theme={store.theme}>
            <h1>Maak</h1>
            <p>Redescubre una nueva manera de streaming y compartir lo que amas</p>
            <span>La primera plataforma hecha por gamers para gamers</span>
          </Slogan>
        </BackgroundAnimation>
        <CreateXSell theme={store.theme}>
        </CreateXSell>
    </MaakLayout>
  )
}

export default Home;