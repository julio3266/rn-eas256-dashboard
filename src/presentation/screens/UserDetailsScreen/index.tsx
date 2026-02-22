import { User } from '@domain/entities/User';
import { getUserByIdUseCase } from '@main/container';
import { useTheme } from '@presentation/theme/useTheme';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, Button as RNButton, Share, ActivityIndicator } from 'react-native';

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

    const handleShare = async () => {
        if (!user) return;
        try {
            await Share.share({
                message: `Confira o usuário: ${user.nome}\nEmail: ${user.email}`,
            });
        } catch (error) {
            console.log('Share error', error);
        }
    };

    if (!user && !loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Usuário não encontrado</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator />
            ) : (
                <>
                    <Text style={styles.title}>{user?.nome}</Text>
                    <Text style={styles.text}>Email: {user?.email}</Text>
                    <Text style={styles.text}>Telefone: {user?.telefone}</Text>
                    <RNButton
                        title="Compartilhar"
                        onPress={handleShare}
                        color={theme.colors.primary}
                    />
                </>
            )}
        </View>
    );
};
