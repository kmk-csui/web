import {useMediaQuery} from 'react-responsive'

export function Desktop({children}) {
  const isDesktop = useMediaQuery({minWidth: 1280})
  return isDesktop ? children : null
}

export function Mobile({children}) {
  const isMobile = useMediaQuery({maxWidth: 1280})
  return isMobile ? children : null
}
