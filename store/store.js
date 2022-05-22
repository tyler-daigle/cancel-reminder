import create from "zustand";

const useStore = create(set => ({
  username: "Tyler",
  expiringSoonListCollapsed: false,
  yourItemsListCollapsed: false,
  calendarViewCollapsed: false,
  monthlyTotalViewCollapsed: false,
  subscriptions: [],
  setUsername: (name) => set(state => ({ username: name })),
  toggleExpiringSoonList: () => set(
    state => ({ expiringSoonListCollapsed: !state.expiringSoonListCollapsed })
  ),
  toggleYourItemsList: () => set(
    state => ({ yourItemsListCollapsed: !state.yourItemsListCollapsed })
  ),
  toggleMonthlyView: () => set(
    state => ({ monthlyTotalViewCollapsed: !state.monthlyTotalViewCollapsed })
  ),
  toggleCalendarView: () => set(
    state => ({ calendarViewCollapsed: !state.calendarViewCollapsed })
  ),

  getSubs: async (userId) => {
    const res = await fetch(`http://localhost:3000/api/subscriptions?userId=${userId}`);
    const data = await res.json();
    set({ subscriptions: data });
  },

  addSub: (sub) => set(
    state => ({ subscriptions: [sub, ...state.subscriptions] })),
}));

export default useStore;