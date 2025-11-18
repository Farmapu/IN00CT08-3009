import { Appbar } from 'react-native-paper';

const MORE_ICON = 'arrow-right';

export function CustomNavBar({ navigation, back }) {
  return (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="MD Nav Demo" />
        {!back ? <Appbar.Action icon={MORE_ICON} onPress={() => navigation.navigate('Details')} /> : null}
    </Appbar.Header>
  );
}