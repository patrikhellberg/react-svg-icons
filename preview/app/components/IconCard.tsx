import SVG, { IconKey } from '@bm-js/icons'
import * as icons from '@bm-js/icons'

type Props = {
  iconKey: IconKey
}

const IconCard = ({ iconKey }: Props) => {
  return <SVG icon={icons[iconKey]} />
}

export default IconCard
