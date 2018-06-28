import canvasBrush from '@/components/canvas-brush'

export const canvasRoutes = [
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
