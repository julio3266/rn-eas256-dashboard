import { User } from '@domain/entities/User';
import { ListEmpty } from '@presentation/components/ListEmpty';
import { ListItem } from '@presentation/components/ListItem';
import { SkeletonCard } from '@presentation/components/Skeleton';
import { RootStackParamList } from '@presentation/navigation/types';
import { useTheme } from '@presentation/theme/useTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { useMemo } from 'react';

import { createStyles } from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export interface ListProps {
    data: User[];
    isLoading: boolean;
    onRefresh: (() => void) | null | undefined;
    refreshing: boolean;
}

export const List: React.FC<ListProps> = ({ data, isLoading, onRefresh, refreshing }) => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp>();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const handleNavigate = (user: User) => {
        navigation.navigate('UserDetails', { userId: user.id });
    };
    return (
        <FlashList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContent}
            refreshing={refreshing}
            onRefresh={onRefresh}
            ListEmptyComponent={
                (isLoading && !data.length && <SkeletonCard repeat={6} />) ||
                (!isLoading && !data.length && <ListEmpty />) ||
                null
            }
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                if (isLoading) return <SkeletonCard />;
                return <ListItem handleDetails={handleNavigate} user={item} />;
            }}
        />
    );
};
