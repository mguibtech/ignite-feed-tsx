import { ImgHTMLAttributes } from 'react'

import styles from './Avatar.module.css'

interface AvaptarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvaptarProps) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}