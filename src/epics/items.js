import { Observable, Subject } from 'rxjs';
import * as Actions from '../actions';

const concurrency = 4;

function fetchItem$(key) {
  const dummyDuration = Math.floor(300 + Math.random() * 300);
  const dummyData = `heavy response for ${key}`.repeat(3);
  const dummyResponse = { key, data: dummyData };
  return Observable.of(dummyResponse).delay(dummyDuration);
}

const items = action$ => {
  const newItems$ = (keys) => {
    const lazyLoad$ = new Subject();
    const keyToData$ = lazyLoad$
      .mergeMap(fetchItem$, concurrency)
      .scan((map, { key, data }) => map.set(key, data), new Map())
      .share();
    const newItem$ = key => {
      const data$ = keyToData$
        .map(keyToData => keyToData.get(key))
        .startWith(undefined)
        .distinctUntilChanged();
      const scheduleLazyLoad$ = action$.ofType(Actions.SCHEDULE_ITEM_FETCH)
        .filter(({ payload }) => payload.key === key);
      const cancelLazyLoad$ = action$.ofType(Actions.CANCEL_ITEM_FETCH)
        .filter(({ payload }) => payload.key === key);
      const lazyLoadStarted$ = Observable.merge(
        scheduleLazyLoad$.mapTo(true),
        cancelLazyLoad$.mapTo(false)
      ).distinctUntilChanged()
        .debounceTime(300)
        .filter(shouldSchedule => shouldSchedule)
        .first()
        .do(() => lazyLoad$.next(key))
        .startWith(false);
      return Observable.combineLatest(lazyLoadStarted$, data$)
        .map(([lazyLoadStarted, data]) => ({ key, data, lazyLoadStarted }))
        .map(Actions.receiveItem);
    };

    return Observable.from(keys)
      .mergeMap(key => newItem$(key))
      .startWith(Actions.clearItems());
  };

  return action$.ofType(Actions.RECEIVE_ITEM_INDEX)
    .switchMap(({ payload: { itemIndex } }) => newItems$(itemIndex));
};
export default items;
