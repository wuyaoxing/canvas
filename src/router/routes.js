import canvasBrush from '@/components/canvas-brush'
import canvasTest from '@/components/canvas-test'
import canvasWave from '@/components/canvas-wave'

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
    }
]

const routes = [
    ...canvasRoutes
]

export default routes
