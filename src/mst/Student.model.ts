import { types } from 'mobx-state-tree'
import type { Instance } from 'mobx-state-tree'
import Person from './Person.model'
const Student = types
    .model({
        id: '', 
        person: Person,
        university: '',
        speciality: '',
    })

    export default Student

export type IStudent = Instance<typeof Student>