import type { ReactElement, ReactNode } from 'react'

export function PreviewContainer({ children }: { children: ReactNode }): ReactElement {
  return <div className="rounded border-[1px] border-solid border-[#e6e6e6] dark:border-[#333333] bg-white p-3 shadow-sm dark:bg-gray-900 dark:text-white">{children}</div>
}

export function DownloadBtnContainer({ children }: { children: ReactNode }): ReactElement {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-10 rounded border-t border-gray-900/10 bg-white bg-opacity-80 p-2 shadow-sm backdrop-blur-md dark:border-gray-500/30 dark:bg-gray-900">
      {children}
    </div>
  )
}
