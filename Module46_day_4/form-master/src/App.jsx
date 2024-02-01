
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data =>{
    console.log('sign up data', data)
}
const handleUpdateProfile = data =>{
    console.log('sign up data', data)
}

  return (
    <>
      
      <h1>Form Master</h1>

      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sing Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h3>Update Profile</h3>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm>
      
    </>
  )
}

export default App
