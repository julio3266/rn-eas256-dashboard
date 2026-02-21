import { User } from '@domain/entities/User';
import { getUsersUseCase } from '@main/container';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadUsers = createAsyncThunk<User[]>('users/load', async (_, { dispatch }) => {
    try {
        const users: User[] = await getUsersUseCase.execute();
        console.log('thunk got users', users);
        return users;
    } catch (err) {
        console.error('loadUsers failed', err);
        throw err;
    }
});
