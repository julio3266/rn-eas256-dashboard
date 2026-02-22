import { Theme } from '@presentation/theme/Theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        userCard: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.05)',
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
