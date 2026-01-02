export default function Circle(props: { style?: React.CSSProperties }) {
    return (
        <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={props.style}
        >
            <circle
                opacity="0.2"
                cx="12.5"
                cy="12.5654"
                r="12.5"
                fill="white"
            />
            <circle cx="13" cy="13.0654" r="3" fill="currentColor" />
        </svg>
    );
}
