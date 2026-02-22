import { User } from '@domain/entities/User';
import { getUsersUseCase } from '@main/container';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadUsers = createAsyncThunk<User[]>('users/load', async (_, { dispatch }) => {
    try {
        const users: User[] = await getUsersUseCase.execute();
        return users;
    } catch (err) {
        throw err;
    }
});
