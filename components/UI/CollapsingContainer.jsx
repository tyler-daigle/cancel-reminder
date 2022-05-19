import styles from "@styles/UI/CollapsingContainer.module.css";

export default function CollapsingContainer({ children, collapsed }) {
  return (
    <div>
      {!collapsed && children}
    </div>
  );
}