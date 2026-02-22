import { Theme } from '@presentation/theme/Theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 12,
            backgroundColor: theme.colors.shimmerBgPrimary,
            borderRadius: 8,
            gap: 12,
            marginBottom: 10,
        },
        textContainer: {
            flex: 1,
            gap: 8,
        },
    });
};
