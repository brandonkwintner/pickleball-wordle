import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

import logo from '../../assets/pickleball-clinic-rect.jpeg'
import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsDatePickerModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar bg-white">
      <div className="navbar-content px-5 short:h-[100px]">
        <div className="flex">
          <InformationCircleIcon
            className="h-12 w-6 cursor-pointer dark:stroke-black"
            onClick={() => setIsInfoModalOpen(true)}
          />
          {ENABLE_ARCHIVED_GAMES && (
            <CalendarIcon
              className="ml-3 h-12 w-6 cursor-pointer dark:stroke-white"
              onClick={() => setIsDatePickerModalOpen(true)}
            />
          )}
        </div>
        <div>
          <p className="text-xl font-bold dark:text-black">{GAME_TITLE}</p>
          <img alt="pickleball-clinic" src={logo} className="mb-1 h-12 w-44" />
        </div>

        <div className="right-icons">
          <ChartBarIcon
            className="mr-3 h-12 w-6 cursor-pointer dark:stroke-black"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-12 w-6 cursor-pointer dark:stroke-black"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
