import styles from './brightnessSwitcher.module.css';
import { Brightness6Rounded } from '@material-ui/icons';

const BrightnessSwitcher = ({ switchTheme, theme, setTheme }) => {
	return (
		<button onClick={() => switchTheme({ theme, setTheme })} className={styles.themeSwitcher}>
			<Brightness6Rounded />
		</button>
	);
};

export default BrightnessSwitcher;
