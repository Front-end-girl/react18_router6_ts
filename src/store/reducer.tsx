const initState = 0

export default function person(state = initState, action: any) {
    const { type, data } = action

    switch (type) {
        case 'INCREMENT':
            return initState + data
        case 'DECREMENT':
            return initState - data
        default:
            return state
    }
}
export const increment = (data: number) => ({ type: 'INCREMENT', data })
