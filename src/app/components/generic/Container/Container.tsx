import React from 'react';
import styles from './Container.module.scss';

export type ContainerPropsType = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerPropsType> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
