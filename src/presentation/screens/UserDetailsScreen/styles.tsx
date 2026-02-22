import { Theme } from '@presentation/theme/Theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 12,
            color: theme.colors.text,
        },
        text: {
            fontSize: 16,
            marginBottom: 8,
            color: theme.colors.text,
        },
    });
