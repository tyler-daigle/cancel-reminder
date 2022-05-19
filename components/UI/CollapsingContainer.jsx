/*
  <CollapsingContainer> will fold and unfold depending on the collapsed flag.
  collapsed is a boolean - true means the container is collapsed and the contents
  will not be visible. False means the container is NOT collapsed and the contents
  will be visible.

  There is no onClick handler for the actual container. The handler should be set
  on something else, such as the <CollapsingContainerHeader> and then the flag 
  will be sent to <CollapsingContainer>. If the onClick is inside the collapsing
  container it obviously won't work.
*/

import styles from "@styles/UI/CollapsingContainer.module.css";

export default function CollapsingContainer({ children, collapsed }) {
  return (
    <div>
      {!collapsed && children}
    </div>
  );
}