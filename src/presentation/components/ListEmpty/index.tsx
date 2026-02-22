import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useTheme } from '@presentation/theme/useTheme';
import { useMemo } from 'react';
import { Text, View } from 'react-native';

import { createStyles } from './styles';

interface Props {
    title?: string;
    description?: string;
}

export const ListEmpty = ({
    title = 'Nenhum resultado encontrado',
    description = 'Não há dados para exibir no momento.',
}: Props) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="inbox" size={100} color={theme.colors.text} opacity={0.3} />
            </View>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};
