import React from 'react'
import Link from 'next/link'

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
    const { as, href, prefetch, ...other } = props;

    return (
        <Link href={href} prefetch={prefetch} as={as}>
            <a ref={ref} {...other} />
        </Link>
    );
});



export default NextComposed;