import styles from "../styles/CyberButton.module.css"
export function CyberButton({ title, text, linkText, href, children }) {
    return (
        <button>
            <span className={styles.button}>Button</span>
        </button>
    )
};
