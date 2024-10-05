import './App.css'
import { CiSearch } from "react-icons/ci";

function App() {

  return (
    <>
      <div className='top-menu'>
        {/* Left */}
        <div>
          <div></div>
          <div>what we offer</div>
        </div>

        {/* Right */}
        <div className='left-menu'>
          <CiSearch size={40} />
          <div>Login</div>
          <div>Register/Sign Up</div>
        </div>
      </div>
      <img
        src='/images/medium.webp'
        alt='cat'
      />
    </>
  )
}

export default App
