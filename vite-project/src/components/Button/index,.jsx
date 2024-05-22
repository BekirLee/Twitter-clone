import classNames from "classnames";
import { createElement } from "react";
import PropTypes from 'prop-types'

export default function Button({ size, variant, children }) {
    return createElement('button', {
        className: classNames("bg-[#1d9bf0] rounded-full flex items-center  justify-center font-bold ",
            {
                "px-4 h-8": size === 'small',
                "px-4 h-9": size === 'normal',
                "px-4 text-[17px] h-[52px] w-full": size === 'large',
                "bg-[#1d9bf0] hover:bg-[#1a8cd8]": variant === 'primary',
                "bg-white text-black": variant === 'white',
            }
        )
    }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'large', 'normal']),
    variant: PropTypes.oneOf(['primary', 'white'])
}

Button.defaultProps = {
    size: 'normal',
    variant: 'white'
}