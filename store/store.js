import create from "zustand";

const useStore = create(set => ({
  username: "Tyler",
  setUsername: (name) => set(state => ({ username: name }))
}));

export default useStore;