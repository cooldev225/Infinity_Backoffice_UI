/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/network/binary'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Binary Compensation'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/network/history'
        icon='/media/icons/duotune/general/gen010.svg'
        title='Volume History'
        fontIcon='bi-layers'
      />
    </>
  )
}
