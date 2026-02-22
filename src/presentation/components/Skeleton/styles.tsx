import { StyleSheet } from 'react-native';

export const createStyles = () => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            backgroundColor: 'gray',
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
