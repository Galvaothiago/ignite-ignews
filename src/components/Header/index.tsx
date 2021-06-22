import Link from 'next/link'
import { SignInButton } from '../SigninButton'
import { ActiveLink } from '../ActiveLink'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'

export function Header() {

    const { asPath } = useRouter()
    const newPath = `${asPath.split('/')[2]}`

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news"/>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href={`/posts`} prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}