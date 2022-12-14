import create from 'zustand';

function countStore(set) {
    return {
        count: 0,
        darkmode: false,
        increment: () => set((state)  => ({ count: state.count + 1 })),
        decrement: () => set((state)  => ({ count: state.count - 1 })),
        changeDark: () => set((state) => ({ darkmode: true})),
        changeLight: () => set((state)=> ({ darkmode: false}))

    };
}

const useStore = create(countStore)
export default useStore 