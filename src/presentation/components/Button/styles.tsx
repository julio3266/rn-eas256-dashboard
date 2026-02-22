import { Theme } from '@presentation/theme/Theme';
import { StyleSheet } from 'react-native';

interface StyleProps {
    variant: 'icon' | 'listItem' | 'primary';
    width?: number;
    height?: number;
}

export const createStyles = (theme: Theme, props: StyleProps) => {
    const { variant, width, height } = props;

    return StyleSheet.create({
        container: {
            width: width ?? (variant === 'icon' ? 40 : '100%'),
            height: height ?? (variant === 'icon' ? 40 : 72),
            borderRadius: variant === 'icon' ? 10 : 12,
            backgroundColor: theme.colors.primary,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: variant === 'icon' ? 'center' : 'space-between',
            paddingHorizontal: variant === 'listItem' ? 16 : 0,
        },
        textContainer: {
            flex: 1,
            marginLeft: 12,
        },
        title: {
            color: theme.colors.text,
            fontSize: 16,
            fontWeight: '600',
        },
        subtitle: {
            color: theme.colors.text,
            fontSize: 14,
        },
        leftIcon: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        rightIcon: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};
