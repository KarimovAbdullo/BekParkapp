import * as React from 'react'
import { ColorValue } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
}

const TranslationIcon = (props: IProps) => {
  const { color = 'white' } = props

  return (
    <Svg width="25" height="25" viewBox="0 0 77 78" fill="none">
      <Path
        d="M60.784 16.768V45.4167H44.8681V61.3327H16.2194V16.768H60.784ZM60.784 10.4017H16.2194C12.7179 10.4017 9.85303 13.2665 9.85303 16.768V61.3327C9.85303 64.8342 12.7179 67.699 16.2194 67.699H48.0513L67.1504 48.5999V16.768C67.1504 13.2665 64.2855 10.4017 60.784 10.4017ZM38.5017 45.4167H22.5858V39.0504H38.5017V45.4167ZM54.4176 32.684H22.5858V26.3176H54.4176V32.684Z"
        fill={color}
      />
    </Svg>
  )
}

export default TranslationIcon
