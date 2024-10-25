import {Colors} from "@/colors/colors";
import {selectTheme, Theme} from "@/state/slices/theme";
import {useSelector} from "react-redux";

export function componentColor(component: keyof typeof Colors.light & keyof typeof Colors.dark): string {
    const theme: Theme = useSelector(selectTheme)
    const selectedTheme = theme ?? 'dark';
    return Colors[selectedTheme][component];
}
