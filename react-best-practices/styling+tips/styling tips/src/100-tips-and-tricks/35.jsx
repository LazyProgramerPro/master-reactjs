const styles = {
  /* some styles... */
};

const Button = ({ primary, outline, isDisabled }) => {
  const className = classNames(
    styles.base,
    primary && styles.primary,
    outline && styles.outline,
    isDisabled && styles.isDisabled
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return <button className={classNames} />;
};
