import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './component/MyButton'

function App() {

  const [count, setCount] = useState(0);

  const user = {
    firstName: 'Natpijak',
    lastName: 'Kaewsawng',
    nickName: 'Beam',
    imgUrl:'https://i.postimg.cc/hPQ5sJ4j/p-bgremove.png'
  }

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <>
    <section className="container">
      <div className="about">
        <h1>About Me</h1>
        <p>I'm a passionate web developer who loves creating modern, responsive, and interactive websites. I focus on writing clean, maintainable code and constantly improve my skills in frontend and backend technologies.</p>
      {/* event click and count */}
      <div className="click">
        <p>Click count is <span>{count}</span></p>
        <MyButton Onclick={handleClick} />        
      </div>
      </div>      
      <div className="profile">
        <img src={user.imgUrl} alt="profile" />
        <p>My name is <span>{user.firstName} {user.lastName}</span></p>
        <p>You can call me <span>{user.nickName}</span></p>
      </div>
    </section>
    </>
  )
}

export default App
