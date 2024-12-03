import * as Dialog from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

export const DialogOverlay = forwardRef(
  ({ onClick, zIndex }: { onClick?: () => void; zIndex?: number }, ref) => {
    return (
      <Dialog.Overlay asChild>
        <motion.div
          onClick={onClick}
          className="fixed inset-0 z-[11] bg-slate-50/80 dark:bg-neutral-900/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ zIndex }}
        />
      </Dialog.Overlay>
    )
  },
)

DialogOverlay.displayName = 'DialogOverlay'
