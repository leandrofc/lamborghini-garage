import { View, Text, Image } from "react-native";
import { styles } from "./style";
import Logo from "../../../assets/logo.png"
import Divider from "../Divider";

export default function CardView(){

    const renderLogoBox = () => (
            <View style={styles.logoContainer}>
                <Image style={styles.imageLogo} source={Logo} />
            </View>
    )

    return (
        <View style={styles.imageContainer}>
            {renderLogoBox()}
            <Divider />
        </View>
    )
}