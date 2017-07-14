import { observable } from 'mobx'

const Store = {
  obj: {},
  final: undefined,
  areaDefault: 'Hello',
  areaVal: undefined
}

export default observable(Store)
