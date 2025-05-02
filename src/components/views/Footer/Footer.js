import {clsx} from "clsx";

const Footer = () => {
  return (
    <footer className={clsx('text-center', 'text-muted', 'py-3')}>
      Copyright <i className={clsx('fa', 'fa-copyright')}/> BlogApp 2025
    </footer>
  )
}

export default Footer;