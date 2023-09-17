import {Background} from "./Components/Background/Background.tsx";
import './App.scss'
import {CardList} from "./Components/CardList/CardList.tsx";
import {CardProps} from "./Components/Card/Card.tsx";

function App() {

  const cardList: CardProps[] = [
    {
      title: 'студия',
      description: 'запись твоего хита',
      backgroundImage: '/first.png',
      backgroundImageProps: 'lightgray -209.201px -12.826px / 278.639% 108.085% no-repeat, #D9D9D9',
      backgroundColor: 'rgba(228, 223, 223, 0.70)',
      linearGradient: 'linear-gradient(180deg, rgba(235, 235, 178, 0.70) 0%, rgba(234, 234, 79, 0.70) 100%)',
      boxShadow: '0px 0px 24px 2px #FFF48F',
    },
    {
      title: 'cc sam',
      description: 'построй свою студию',
      backgroundImage: '/second.png',
      backgroundImageProps: 'lightgray 50% / cover no-repeat, #D9D9D9',
      backgroundColor: 'rgba(228, 223, 223, 0.70)',
      linearGradient: 'linear-gradient(180deg, rgba(148, 208, 252, 0.70) 0%, rgba(81, 142, 234, 0.70) 100%)',
      boxShadow: '0px 0px 24px 2px #5D5BE6',
    },
    {
      title: 'music.lab',
      description: 'лаборатория звука',
      backgroundImage: '/third.png',
      backgroundImageProps: 'lightgray -230.458px 0px / 285.183% 100% no-repeat, #D9D9D9',
      backgroundColor: 'rgba(228, 223, 223, 0.70)',
      linearGradient: 'linear-gradient(180deg, rgba(255, 228, 134, 0.70) 0%, rgba(255, 199, 1, 0.70) 100%)',
      boxShadow: '0px 0px 24px 2px #FFB800',
    },
    {
      title: 'my soul',
      description: 'продюссер+артист=мэтч',
      backgroundImage: '/fourth.png',
      backgroundImageProps: 'lightgray -258.414px -7.46px / 287.419% 111.491% no-repeat, #D9D9D9',
      backgroundColor: 'rgba(228, 223, 223, 0.70)',
      linearGradient: 'linear-gradient(180deg, rgba(237, 134, 218, 0.70) 0%, rgba(244, 56, 222, 0.70) 100%)',
      boxShadow: '0px 4px 24px 2px #E97CDB',
    },
    {
      title: 'метроном',
      description: 'вдохновение  от ии',
      backgroundImage: '/fifth.png',
      backgroundImageProps: 'lightgray -174.019px -234.155px / 177.146% 154.767% no-repeat, #D9D9D9',
      backgroundColor: 'rgba(228, 223, 223, 0.70)',
      linearGradient: 'linear-gradient(180deg, rgba(189, 246, 131, 0.70) 0%, rgba(93, 252, 100, 0.70) 100%)',
      boxShadow: '0px 0px 24px 2px #8AFF42',
    },
    {
      title: 'медиа',
      description: 'весь наш контент',
      backgroundImage: '/sixth.png',
      backgroundImageProps: 'lightgray 50% / cover no-repeat',
      backgroundColor: 'rgba(0, 0, 0, 0.70)',
      backgroundButtonImage: '/backgroundForMediaSmall.png',
      textColor: '#FFF',
    }
  ]

  return (
    <>
      <Background />
      <div className='main'>
        <div className='musicLab_title'>
          <h1 className='title'>music.lab</h1>
          <h2 className='subtitle'>а как будешь звучать ты?</h2>
        </div>
        <CardList {...cardList} />
        <button className='forumButton'>Есть чем похвастаться?
          заходи на <span>форум</span></button>
      </div>
    </>
  )
}

export default App
