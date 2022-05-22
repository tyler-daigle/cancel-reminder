import create from "zustand";

const useStore = create(set => ({
  username: "Tyler",
  expiringSoonListCollapsed: false,
  yourItemsListCollapsed: false,
  calendarViewCollapsed: false,
  monthlyTotalViewCollapsed: false,
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
  )
}));

export default useStore;