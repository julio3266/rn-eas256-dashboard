import { Theme } from '@presentation/theme/Theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            marginTop: '55%',
            alignItems: 'center',
        },
        iconContainer: {
            marginBottom: 16,
        },
        title: {
            fontSize: 18,
            fontWeight: '600',
            color: theme.colors.text,
            marginBottom: 8,
            textAlign: 'center',
        },
        description: {
            fontSize: 14,
            color: theme.colors.text,
            opacity: 0.6,
            textAlign: 'center',
        },
    });
