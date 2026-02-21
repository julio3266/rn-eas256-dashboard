import { RootState } from '@presentation/store';
import { View, Text, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loadUsers } from '../store/thunks';

export const HomeScreen = () => {
    const dispatch = useAppDispatch();
    const { users, loading, error } = useAppSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    console.log('===users', users, 'loading', loading, 'error', error);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
            }}
        >
            {loading ? (
                <ActivityIndicator size="large" color="#fff" />
            ) : error ? (
                <Text style={{ color: 'red' }}>Error: {error}</Text>
            ) : (
                <Text style={{ color: '#f9f9f9', fontWeight: '700' }}>Home Screen</Text>
            )}
        </View>
    );
};
