import { create } from 'zustand'

import type { ShortcutKeyControllerMapType } from '@/utils/shortcutKeyController'

/**
 * @file: 编辑器全局设置
 */

export interface SettingStoreProps {
  showSettingModal: boolean
  configVisible: boolean
  orbitControlsEnabled: boolean
  axesHelperEnabled: boolean
  gridHelperEnabled: boolean
  shortcutKeyApi: ShortcutKeyControllerMapType | null
  showHelpDrawer: boolean
  setShowSettingModal: (visible: boolean) => void
  setConfigVisible: (visible: boolean) => void
  setOrbitControlsEnabled: (enabled: boolean) => void
  setAxesHelperEnabled: (enabled: boolean) => void
  setGridHelperEnabled: (enabled: boolean) => void
  setShowHelpDrawer: (visible: boolean) => void
}

const settingStore = create<SettingStoreProps>(set => ({
  showSettingModal: false, // 是否显示设置面板
  configVisible: false, // 配置面板是否可见
  orbitControlsEnabled: true, // 是否启用轨道控制器
  axesHelperEnabled: true, // 是否启用坐标轴辅助线
  gridHelperEnabled: true, // 是否启用网格辅助线
  shortcutKeyApi: null, // 快捷键
  showHelpDrawer: false, // 是否显示帮助抽屉

  setShowSettingModal: (visible: boolean) => set({ showSettingModal: visible }),
  setConfigVisible: (visible: boolean) => set({ configVisible: visible }),
  setOrbitControlsEnabled: (enabled: boolean) => set({ orbitControlsEnabled: enabled }),
  setAxesHelperEnabled: (enabled: boolean) => set({ axesHelperEnabled: enabled }),
  setGridHelperEnabled: (enabled: boolean) => set({ gridHelperEnabled: enabled }),
  setShowHelpDrawer: (visible: boolean) => set({ showHelpDrawer: visible }),
}))

export type SettingStoreType = typeof settingStore

export default settingStore
