<template>
  <div style="width: 1200px; height: 900px; background-color: pink" ref="xe2Container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ESObjectsManager } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main'

const xe2Container = ref<HTMLElement | null>(null)
const editorJson = {
  asset: {
    version: '0.1.0',
    type: 'ESObjectsManager',
    createdTime: '2022-06-17T05:54:41.744Z',
    modifiedTime: '2023-12-14T08:28:04.290Z',
    name: '基础场景',
  },
  viewers: [],
  viewCollection: [],
  lastView: null,
  sceneTree: {
    root: {
      children: [
        {
          name: 'Cesium基础场景',
          children: [
            {
              name: '谷歌影像',
              sceneObj: {
                id: 'e211f45f-bed9-4898-8ae4-8f4ba7cba447',
                type: 'ESImageryLayer',
                url: 'http://0414.gggis.com/maps/vt?lyrs=s&x={x}&y={y}&z={z}',
                // "url": "//webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
                name: '谷歌影像',
              },
              children: [],
            },
          ],
        },
      ],
    },
  },
}

const objm = new ESObjectsManager()
objm.json = { ...editorJson }
onMounted(() => {
  if (!xe2Container.value) return
  const czmViewer = objm.createCesiumViewer(xe2Container.value, '12345')
})
</script>
