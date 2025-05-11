import { createContext } from 'react'

const MotionContext = createContext<{
    motion: boolean
    setMotion: React.Dispatch<React.SetStateAction<boolean>>
}>({
    motion: true,
    setMotion: () => {},
})

export default MotionContext
