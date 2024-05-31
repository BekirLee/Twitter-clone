import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function SidebarSection({ title, children, more }) {
    return (
        <section className="mb-4 rounded-xl border bg-[color:var(--background-secondary)] border-[color:var(--background-secondary)] flex flex-col gap-2.5 ">
            <div className="">
                <h1 className="text-[color:var(--color-base)] text-[19px] font-extrabold px-4 pt-3">{title}</h1>
                <div className="grid ">
                    {children}
                </div>

                {more && (
                    <Link
                        to={more}
                        className="flex items-center px-4 py-3 text-[#1d9bf0] text-[13px] hover:bg-[#16181c94]"
                    >
                        Show More
                    </Link>
                )
                }
            </div>

        </section>
    )
}

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
    more: false
}