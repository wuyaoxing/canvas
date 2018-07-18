import canvasBrush from '@/components/canvas-brush'
import canvasTest from '@/components/canvas-test'
import canvasWave from '@/components/canvas-wave'
import canvasDevicelink from '@/components/canvas-devicelink'

export const canvasRoutes = [
    {
        name: 'canvasTest',
        path: '/canvas/test',
        component: canvasTest
    },
    {
        name: 'canvasBrush',
        path: '/canvas/brush',
        component: canvasBrush
    },
    {
        name: 'canvasWave',
        path: '/canvas/wave',
        component: canvasWave
    },
    {
        name: 'canvasDevicelink',
        path: '/canvas/devicelink',
        component: canvasDevicelink
    }
]

const routes = [
    ...canvasRoutes
]

export default routes
