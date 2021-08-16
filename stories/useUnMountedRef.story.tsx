import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useUnMountedRef } from '../src';
import ShowDocs from './util/ShowDocs';

const Unmount = () => {
  const unmountRef: { current: boolean } = useUnMountedRef();
  const [text, setText] = useState('I am mounted');
  const handleClick = async () => {
    !unmountRef.current && setText('I am unmounted');
  };
  return <button onClick={handleClick}>{text}</button>;
};

export default () => {
  return (
    <div>
      click the button to unmount it
      <br />
    </div>
  );
};

storiesOf('Hooks/life', module)
  .add('docs', () => <ShowDocs md={require('../docs/useUnMountedRef.md')} />)
  .add('demo', Unmount);
