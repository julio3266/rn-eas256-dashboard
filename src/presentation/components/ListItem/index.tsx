import { User } from '@domain/entities/User';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useTheme } from '@presentation/theme/useTheme';
import { useMemo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { createStyles } from './styles';

export interface ListItemProps {
    user: User;
}

export const ListItem: React.FC<ListItemProps> = ({ user }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { nome, telefone, id } = user;
    return (
        <TouchableOpacity key={id} style={styles.userCard}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{nome.charAt(0)}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{nome}</Text>
                <Text style={styles.userSubtitle}>{telefone}</Text>
            </View>
            <FontAwesome5 name="chevron-right" size={14} color={theme.colors.text} opacity={0.3} />
        </TouchableOpacity>
    );
};
