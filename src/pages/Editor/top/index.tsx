import type { FC } from 'react'
import { useMemo } from 'react'

import {
  CloseOutlined,
  DotChartOutlined,
  DownloadOutlined,
  QuestionCircleOutlined,
  RedoOutlined,
  SettingOutlined,
  UndoOutlined,
  UploadOutlined,
} from '@ant-design/icons'

import store from '@/store'

interface TopProps {

}

interface TopItemButtonType {
  label: string
  icon: JSX.Element
  onClick?: () => void
}

enum TopItemEnum {
  operate,
  setting,
}

const Top: FC<TopProps> = () => {
  const schemaStore = store.schemaStore(state => state)
  const operateData = useMemo<TopItemButtonType[]>(
    () => [
      {
        label: '场景',
        icon: <DotChartOutlined />,
      },
      {
        label: '导入',
        icon: <UploadOutlined />,
      },
      {
        label: '导出',
        icon: <DownloadOutlined />,
      },
      {
        label: '回退',
        icon: <UndoOutlined />,
      },
      {
        label: '撤销',
        icon: <RedoOutlined />,
      },
      {
        label: '清空',
        icon: <CloseOutlined />,
        onClick: () => {
          schemaStore.reset()
        },
      },
    ], [
      schemaStore,
    ],
  )
  const settingData = useMemo<TopItemButtonType[]>(
    () => [
      {
        label: '设置',
        icon: <SettingOutlined />,
      },
      {
        label: '帮助',
        icon: <QuestionCircleOutlined />,
      },
    ],
    [
      schemaStore,
    ],
  )

  const renderTopItem = (type: TopItemEnum) => {
    const currentData = type === TopItemEnum.operate ? operateData : settingData
    return currentData.map((item) => {
      return (
        <div onClick={() => { item.onClick?.() }} key={item.label} className='mr-6 flex flex-col items-center text-sm'>
          {item.label}
          {item.icon}
        </div>
      )
    })
  }

  return (
    <div className='flex justify-between pt-1 items-center cursor-pointer' style={{ backgroundColor: 'rgba(225, 225, 225, 0.7)', height: '60px' }}>
      <div className='ml-5'>anov-3d-editor</div>
      <div className='flex'>
        {renderTopItem(TopItemEnum.operate)}
      </div>
      <div className='flex'>
        {renderTopItem(TopItemEnum.setting)}
      </div>
    </div>
  )
}

export default Top
