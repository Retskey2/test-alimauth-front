import styles from './DisplayField.module.scss';

interface IDisplayField {
  label?: string;
  value?: string;
}

export const DisplayField = ({ label, value }: IDisplayField) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
};
