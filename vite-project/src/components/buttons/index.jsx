import classNames from "classnames"
import { createElement } from "react"
import PropTypes from 'prop-types'


export default function Button({ size, children }) {
    return createElement("button", {
        className: classNames("bg-[#1d9bf0] rounded-full font-bold block ", {
            "px-4 h-9 ": size === "normal",
            "px-4 w-[90%] h-[52px] ": size === "large"
        })
    }, children)
}


Button.propTypes = {
    size: PropTypes.oneOf(["normal", "large"])
}
Button.defaultType = {
    size: "normal"
}