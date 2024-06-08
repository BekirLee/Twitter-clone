import classNames from "classnames";
import { createElement } from "react";
import PropTypes from 'prop-types'

export default function Button({ size, variant, className, children, ...props }) {
    return createElement('button', {
        className: classNames("bg-[#1d9bf0] rounded-full flex items-center  justify-center font-bold transition-all ",
            {
                "px-4 h-8": size === 'small',
                "px-4 h-9": size === 'normal',
                "px-4 text-[17px] h-[52px] w-[75%]": size === 'large',
                "bg-[color:var(--color-primary)] hover:opacity-90": variant === 'primary',
                "bg-white text-black": variant === 'white',
                "border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e] bg-black": variant === 'white-outline',
                [className]: true
            }
        ),
        ...props
    }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'large', 'normal']),
    variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
    props: PropTypes.object,
    className: PropTypes.string
}

Button.defaultProps = {
    size: 'normal',
    variant: 'white'
}