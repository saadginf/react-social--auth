import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';


function App() {

  const handleLogin = (res) =>{
    console.log(res.tokenId)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleLogin
    clientId="74802104766-0947uvmn5nrd5ph2j71dek22dn6t9kho.apps.googleusercontent.com"    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
/>
      </header>
    </div>
  );
}

export default App;
