import classNames from "classnames"
import { useTab } from "./context"
import PropTypes from 'prop-types'

export default function Item({ children, id }) {

    const { active, setActive } = useTab()

    return (
        <button
            type="button"
            className="flex-auto text-center hover:bg-[color:var(--background-secondary)]"
            onClick={() => {
                setActive(id)
            }}
        >
            <div className={classNames("h-[3.313rem] relative inline-flex items-center", {
                "font-bold": active == id,
                "text-[color:var(--base-secondary)] font-medium": active !== id
            })}>
                {children}
                {active === id && (
                    <div className="absolute h-[4px] bottom-0 left-0 w-full rounded-full bg-[color:var(--color-primary)]"></div>
                )}
            </div>
        </button>
    )
}

Item.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    id: PropTypes.string
}