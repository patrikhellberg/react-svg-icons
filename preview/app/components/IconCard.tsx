// import {} from "@bm-js/icons"

import SVG, { iconKeys } from '@bm-js/icons'
import * as icons from '@bm-js/icons'

type Props = {
  iconKey: keyof typeof icons
}

const IconCard = ({ iconKey }: Props) => {
  //   return <SVG icon={icons[iconKey]}/>
  return <p></p>
}

export default IconCard
