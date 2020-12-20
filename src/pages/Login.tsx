import { useEffect } from 'react';
import { firebaseAuthUI, firebaseAuthUIConfig } from '../utils/firebase';

const Login = () => {
  useEffect(() => {
    firebaseAuthUI.start('#firebaseui-auth-container', firebaseAuthUIConfig);
  }, []);

  return (
    <>
      <div id="firebaseui-auth-container" />
      {/* TODO: meterial-uiのLoadingを使うように修正 */}
      <div id="loader">Loading...</div>
    </>
  );
};

export default Login;
