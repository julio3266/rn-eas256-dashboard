import { User } from '@domain/entities/User';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Button } from '@presentation/components/Button';
import { List } from '@presentation/components/List';
import { RootState } from '@presentation/store';
import { useAppDispatch, useAppSelector } from '@presentation/store/hooks';
import { loadUsers } from '@presentation/store/thunks';
import { useTheme } from '@presentation/theme/useTheme';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createStyles } from './styles';

export const HomeScreen = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const dispatch = useAppDispatch();

    const { users, loading } = useAppSelector((state: RootState) => state.users);

    const handleRefresh = useCallback(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    useFocusEffect(
        useCallback(() => {
            dispatch(loadUsers());
        }, [dispatch]),
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Usuários</Text>
                <Button
                    loading={loading}
                    variant="icon"
                    onPress={handleRefresh}
                    leftIcon={<FontAwesome5 name="sync" size={18} color="white" />}
                />
            </View>
            <List
                data={users as User[]}
                isLoading={loading}
                onRefresh={handleRefresh}
                refreshing={loading}
            />
        </SafeAreaView>
    );
};
