export {}

// import { createContext, useContext, useReducer, useRef } from 'react';

// type Props = {
//   children: JSX.Element | null;
// };

// type State = {

// };

// type Action = {
//   type: string;
// };

// type Dispatch = {
//   getNearby: (arg: GetNearbyProps) => Promise<void>;
//   select: (selected: SellerData | null) => void;
//   setFilter: (product: string, value: boolean) => void;
// };

// const FilterStateContext = createContext<State | null>(null);
// const FilterDispatchContext = createContext<Dispatch | null>(null);

// const initialState: State = {
  
// };

// const FilterProvider = ({ children }: Props) => {

//   const reducer = (state: State, action: Action): State => {
//     switch (action.type) {
//       case 'SET_FILTER': {
//         const { product, value } = action;
//         if (!product || !(typeof value === 'boolean')) return state;
//         let { filter } = state;
//         if (value) {
//           if (!filter.includes(product)) filter.push(product);
//         } else {
//           filter = filter.filter((item: string) => item !== product);
//         }
//         return {
//           ...state,
//           filter,
//         }
//       }
//       default: throw new Error('no such action type');
//     }
//   };

//   const [state, dispatch] = useReducer<(state: State, action: Action) => State>(reducer, initialState);

//   return (
//     <FilterStateContext.Provider value={state as State}>
//       <FilterDispatchContext.Provider value={{
//         // getNearby,
//         // select,
//         // setFilter,
//       }}>
//         {children}
//       </FilterDispatchContext.Provider>
//     </FilterStateContext.Provider>
//   );
// };

// const useFilterDispatch = () => {
//   const dispatch = useContext(FilterDispatchContext);
//   if (!dispatch) {
//     console.error('useFilterDispatch must be used within a FilterProvider');
//     return;
//   }

//   return dispatch;
// };

// const useFilterState = () => {
//   const state = useContext(FilterStateContext);
//   if (!state) {
//     console.error('useFilterState must be used within a FilterProvider');
//     return;
//   }
//   return state;
// };

// export {
//   FilterProvider,
//   useFilterDispatch,
//   useFilterState,
// };
