import canvasBrush from '@/components/canvas-brush'
import canvasTest from '@/components/canvas-test'

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
    }
]

const routes = [
    ...canvasRoutes
]

export default routes
