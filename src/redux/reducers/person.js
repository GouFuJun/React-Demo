import { ADD_PERSON } from '../constant'

const initState = [
    { name: '王学东', age: 100 },
    { name: '李白', age: 1000 },
    { name: '杜甫', age: 800 }
]

export default function personReducer(prevState = initState, action) {
    const { type, data } = action
    switch(type) {
        case ADD_PERSON:
            return [data, ...prevState]
        default:
            return prevState
    }
}