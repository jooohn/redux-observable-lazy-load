import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from '../reducers';
import epics from '../epics';

const epicMiddleware = createEpicMiddleware(epics);

export default function configureStore() {
  return createStore(
    reducer,
    applyMiddleware(
      epicMiddleware
    )
  );
}
