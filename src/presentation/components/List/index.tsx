import { User } from '@domain/entities/User';
import { useTheme } from '@presentation/theme/useTheme';
import { FlashList } from '@shopify/flash-list';
import { useMemo } from 'react';
import { ListEmpty } from 'src/ListEmpty';

import { createStyles } from './styles';
import { ListItem } from '../ListItem';
import { SkeletonCard } from '../Skeleton';

export interface ListProps {
    data: User[];
    isLoading: boolean;

    onRefresh: (() => void) | null | undefined;
    refreshing: boolean;
}

export const List: React.FC<ListProps> = ({ data, isLoading, onRefresh, refreshing }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
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
                return <ListItem user={item} />;
            }}
        />
    );
};
