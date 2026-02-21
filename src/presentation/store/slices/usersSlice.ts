import { loadUsers } from '@presentation/store/thunks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    name: string;
}

interface UsersState {
    users: User[];
    loading: boolean;
    error?: string;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: undefined,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<User[] | undefined>) => {
                state.loading = false;
                state.users = action.payload || [];
            })
            .addCase(loadUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
