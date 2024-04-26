import library from '@/assets/data/library.json';
import { utilsStyles } from '@/styles';
import { FlatList, FlatListProps, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TracksListItem } from './TrackListItem';

export type TracksListProps = Partial<FlatListProps<unknown>>;

const ItemDivider = () => (
	<View
		style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
	/>
);

export const TracksList = ({ ...flatlistProps }: TracksListProps) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FlatList
				data={library}
				ItemSeparatorComponent={ItemDivider}
				renderItem={({ item: track }) => (
					<TracksListItem
						track={{
							...track,
							image: track.artwork,
						}}
					/>
				)}
				{...flatlistProps}
			/>
		</SafeAreaView>
	);
};
