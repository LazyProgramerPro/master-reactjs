import React from "react";

// The Switch component will render one of its child components based on conditions
export const Switch = ({ children }) => {
  // Variables to hold the matched case and the default case
  let matchChild = null;
  let defaultCase = null;

  // Iterate over each child of the Switch component
  React.Children.forEach(children, (child) => {
    // Check if we haven't found a match yet and the current child is a Case component
    if (!matchChild && child.type === Case) {
      // Extract the condition prop from the Case component
      const { condtion } = child.props;

      // Convert the condition to a boolean
      const conditionRes = Boolean(condtion);

      // If the condition is true, set this child as the match
      if (conditionRes) {
        matchChild = child;
      }
    } else if (!defaultCase && child.type === Default) {
      // If we haven't found a default case yet and the current child is a Default component, set it as the default case
      defaultCase = child;
    }

    // Return the matched child if found, otherwise return the default case if found, or null if none
    return matchChild ?? defaultCase ?? null;
  });
};

// The Case component simply renders its children
export const Case = ({ children }) => {
  return children;
};

// The Default component also simply renders its children
export const Default = ({ children }) => {
  return children;
};
