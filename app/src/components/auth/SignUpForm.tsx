// SignUpForm.tsx
import React, { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/button';
import { Input, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { Mail, Lock, LogIn } from 'lucide-react';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/app/dashboard');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/app/dashboard');
    } catch (error) {
      console.error('Error signing up with Google:', error);
    }
  };
  
  const navigateToSignIn = () => {
    navigate('/signin');
  };
  
  return (
    <Card className="max-w-sm mx-auto">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Create an account</p>
          <p className="text-small text-default-500">Enter your details below</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <form className="flex flex-col gap-4">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onValueChange={setEmail}
            startContent={<Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onValueChange={setPassword}
            startContent={<Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          />
          <Button onClick={handleSignUp} color="primary" variant="solid">
            Sign Up
          </Button>
          <Button onClick={handleGoogleSignUp} variant="bordered" startContent={<img src="/google-icon.png" alt="Google" width={20} height={20} />}>
            Sign up with Google
          </Button>
          <Divider className="my-2" />
          <Button onClick={navigateToSignIn} variant="light" color="primary" startContent={<LogIn />}>
            Already have an account? Sign In
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default SignUpForm;