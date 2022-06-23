import * as React from 'react'

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = React.useState<string | null>(null)
  const copy = async (text: string): Promise<boolean> => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy]
}
