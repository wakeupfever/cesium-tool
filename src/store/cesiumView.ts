import { defineStore } from 'pinia'
import * as Cesium from 'cesium'

export const useCesiumView = defineStore('cesiumView', {
  state: () => ({
    cesiumView: null as Cesium.Viewer | null,
  }),
  actions: {
    setCesiumView(viewer: Cesium.Viewer) {
      this.cesiumView = viewer
    },
  },
})
