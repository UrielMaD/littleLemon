import { updateTimes, initializeTimes } from "../AppContextProvider";

describe('Reducer functions', () => {
    it('should return the initial state', () => {
        const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        const initializedState = initializeTimes();
        expect(initializedState).toStrictEqual(initialState);
    });

    it('should update the state', () => {
        const updatedState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        const state = updateTimes();
        expect(state).toStrictEqual(updatedState);
    });
});