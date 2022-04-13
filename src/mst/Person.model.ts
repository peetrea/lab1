import { types } from 'mobx-state-tree'
import type { Instance } from 'mobx-state-tree'
const Person = types
    .model({
        id: '',
        firstName: '',
        secondName: '',
        gender: '',
        age:  types.number,
        height: types.number,
    })

    export default Person

export type IPerson = Instance<typeof Person>