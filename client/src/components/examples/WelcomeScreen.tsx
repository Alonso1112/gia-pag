import WelcomeScreen from '../WelcomeScreen';

export default function WelcomeScreenExample() {
  return <WelcomeScreen onEnter={() => console.log('Enter clicked')} />;
}
