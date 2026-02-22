import { User } from '@domain/entities/User';
import { getUserByIdUseCase } from '@main/container';
import { useTheme } from '@presentation/theme/useTheme';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, Share, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createStyles } from './styles';

interface RouteParams {
    userId: string;
}

export const UserDetailsScreen = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const route = useRoute();
    const { userId } = route.params as RouteParams;

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getUserByIdUseCase
            .execute(userId)
            .then(setUser)
            .finally(() => setLoading(false));
    }, [userId]);

    if (!user && !loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Usuário não encontrado</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <ActivityIndicator />
            ) : (
                <>
                    <Text style={styles.title}>{user.nome}</Text>
                    <Text style={styles.text}>Email: {user.email}</Text>
                    <Text style={styles.text}>Telefone: {user.telefone}</Text>
                </>
            )}
        </SafeAreaView>
    );
};
