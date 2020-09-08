import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroes, removeHero } from '../hero.actions';
import HeroForm from '../components/HeroForm';
import { IApplicationState } from '../../../../store/types';
import { Button } from '@material-ui/core';

type Props = {};

const Heroes: React.FC<Props> = () => {
  const dispatch: Dispatch = useDispatch();
  const { heroes, loading } = useSelector(
    (state: IApplicationState) => state.heroReducer,
  );

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  return (
    <div className={'container'}>
      <h1>Redux Demo: GET and DELETE</h1>
      <h2>Heroes</h2>
      <HeroForm />
      <ul className={'mt-5 list-group'}>
        {loading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          heroes.map(h => (
            <li
              key={h.id}
              className={
                'list-group-item col-12 d-flex justify-content-between'
              }
            >
              <div
                className={'mb-5'}
              >{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</div>
              <div>
                <Button
                  variant={'contained'}
                  color={'primary'}
                  onClick={() => dispatch(removeHero(h.id))}
                >
                  Remove
                </Button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Heroes;
