import { useTheme } from '@presentation/theme/useTheme';
import { useMemo } from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';

import { createStyles } from './styles';

export type ButtonVariant = 'icon' | 'listItem' | 'primary';

export interface ButtonProps {
    onPress: () => void;
    title?: string;
    subtitle?: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    loading?: boolean;
    width?: number;
    height?: number;
    variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
    onPress,
    title,
    height,
    subtitle,
    width,
    loading,
    leftIcon,
    rightIcon,
    variant = 'primary',
}) => {
    const theme = useTheme();
    const styles = useMemo(
        () => createStyles(theme, { variant, width, height }),
        [theme, variant, width, height],
    );

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {leftIcon && !loading && <View style={styles.leftIcon}>{leftIcon}</View>}

            {(title || subtitle) && (
                <View style={styles.textContainer}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
            )}

            {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
            {loading && <ActivityIndicator />}
        </TouchableOpacity>
    );
};
