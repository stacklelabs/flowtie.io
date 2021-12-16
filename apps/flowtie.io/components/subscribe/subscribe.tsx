import './subscribe.module.css';
import * as React from 'react';
import axios from 'axios';

/* eslint-disable-next-line */
export interface SubscribeProps {}

export enum SubscribeState {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export function Subscribe(props: SubscribeProps) {
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState(SubscribeState.Idle);
  const [errorMsg, setErrorMsg] = React.useState<null | string>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setState(SubscribeState.Loading);

    try {
      const response = await axios.post('/api/mailchimp', { email });
      console.log(response);
      setState(SubscribeState.Success);
      setEmail('');
    } catch (err) {
      console.log(err.response.data.error);
      setErrorMsg(err.response.data.error);
      setState(SubscribeState.Error);
    }
  };

  return (
    <div className="mt-10 sm:mt-12">
      <form
        action="#"
        className="sm:px-4 sm:max-w-xl sm:mx-auto lg:mx-0 lg:max-w-[50%]"
        onSubmit={handleSubscribe}
      >
        <div className="sm:flex">
          <div className="min-w-0 flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required={true}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="block w-full px-4 py-3 rounded md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              disabled={state === SubscribeState.Loading}
              onClick={handleSubscribe}
              type="submit"
              className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
            >
              Join the waitlist
            </button>
          </div>
        </div>
        {state === SubscribeState.Error && (
          <div>
            <span>{errorMsg}</span>
          </div>
        )}
        {state === SubscribeState.Success && (
          <div>
            <span>Awesome, you are all set!</span>
          </div>
        )}
      </form>
    </div>
  );
}

export default Subscribe;
