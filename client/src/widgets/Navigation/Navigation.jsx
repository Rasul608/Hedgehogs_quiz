import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Button from '../../shared/ui/Button/Button';

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div>
      <Button text='Main' onClick={() => navigate('/')} />

      <Link to='/tasks'>
        <Button text='Tasks' />
      </Link>

      {/* <Link to='/questions'>
        <Button text='Questions' />
      </Link> */}

      {/* <Outlet /> */}

      <h1>FOOTER</h1>
    </div>
  );
}
