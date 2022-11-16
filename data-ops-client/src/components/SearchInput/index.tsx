import React, { memo, useState } from 'react';
import classnames from 'classnames';
import Iconfont from '@/components/Iconfont'
import { Input } from 'antd';
import i18n from '@/i18n';
import styles from './index.less';

interface IProps {
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default memo<IProps>(function SearchInput({ className, placeholder, onChange }) {
  const [isFocus, setisFocus] = useState(false);
  return <div className={classnames(className, styles.searchInput, { [styles.focus]: isFocus })}>
    <Iconfont code="&#xe600;"></Iconfont>
    <Input
      onBlur={() => { setisFocus(false) }}
      onFocus={() => { setisFocus(true) }}
      type="text"
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value)
      }}
    />
  </div>
})
