import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button(props) {
    const className = [props.className]
    if (props.isPrimary) className.push("btn-primary")
    if (props.isLarge) className.push("btn-lg")
    if (props.isSmall) className.push("btn-sm")
    if (props.isBlock) className.push("btn-block")
    if (props.hashShadow) className.push("btn-shadow")

    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    if (props.isDisable || props.isLoading) {
        if (props.isDisable) className.push("disabled")
        return (
            <span className={className.join(" ")} style={props.style}>
                {
                    props.isLoading ?
                        <>
                            <span className="spinner-border spinner-border-sm mx-5"></span>
                            <span className="sr-only">Loading...</span>
                        </> :
                        props.children
                }
            </span>
        )
    }

    if (props.type === "link") {
        //Eslint no support "noopener noreferrer" (Ctrl + . = disable-eslint-next-line)
        if (props.isExternal) {
            return (
                // eslint-disable-next-line react/jsx-no-target-blank
                <a href={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    target={props.target === "_blank" ? "_blank" : undefined}
                    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                >{props.children}</a>
            )
        }
        else {
            <Link to={props.href}
                className={className.join(" ")}
                style={props.style}
                onClick={onClick}
            >{props.children}
            </Link>
        }
    }
    return (
        <div>
            <button className={className.join(" ")}
                style={props.style}
                onClick={onClick}
            >{props.children}
            </button>
        </div>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(["button", "link"]),
    onClick: PropTypes.func,
    target: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    isDisable: PropTypes.bool,
    isExternal: PropTypes.bool,
    isSmall: PropTypes.bool,
    isLarge: PropTypes.bool,
    isBlock: PropTypes.bool,
    isLoading: PropTypes.bool,
    hashShadow: PropTypes.bool,
}