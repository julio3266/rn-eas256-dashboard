import { Theme } from '@presentation/theme/Theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15,
        },
        headerTitle: {
            fontSize: 28,
            fontWeight: 'bold',
            color: theme.colors.text,
        },
        refreshButton: {
            width: 45,
            height: 45,
            backgroundColor: theme.colors.primary,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
        listContent: {
            paddingHorizontal: 20,
            paddingBottom: 20,
        },
        userCard: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.05)', // Card levemente visível
            padding: 15,
            borderRadius: 16,
            marginBottom: 12,
        },
        avatar: {
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
        },
        avatarText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
        },
        userInfo: {
            flex: 1,
        },
        userName: {
            fontSize: 16,
            fontWeight: '600',
            color: theme.colors.text,
        },
        userSubtitle: {
            fontSize: 13,
            color: theme.colors.text,
            opacity: 0.6,
            marginTop: 2,
        },
    });
};
