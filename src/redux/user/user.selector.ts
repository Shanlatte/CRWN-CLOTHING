import { createSelector } from 'reselect'
import { RootState } from '../root-reducer'

const selectUser = (state: RootState) => state.user;

const selectCart = (state: RootState) => state.cart;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)