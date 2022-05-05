import React from 'react';
import { Button, Popover } from 'antd';
import { CurrentUserBadge } from '../CurrentUserBadge';
//import { SettingOutlined } from '@ant-design/icons';
import { Settings } from '../Settings';
import { LABELS } from '../../constants/labels';
import { ConnectButton } from '..';
import { useWallet } from '@solana/wallet-adapter-react';

export const AppBar = (props: {
  left?: JSX.Element;
  right?: JSX.Element;
  useWalletBadge?: boolean;
  additionalSettings?: JSX.Element;
}) => {
  const { connected } = useWallet();

  const TopBar = (
    <div className="App-Bar-right">
      {props.left}
      {connected ? (
        <CurrentUserBadge />
      ) : (
        <ConnectButton
          type="text"
          size="large"
          style={{ color: '#2abdd2' }}
          allowWalletChange
        />
      )}
      <Popover
        placement="topRight"
        title={LABELS.SETTINGS_TOOLTIP}
        content={<Settings additionalSettings={props.additionalSettings} />}
        trigger="click"
      >
        <Button
          shape="circle"
          size="large"
          type="text"
          icon={
            <img
              src="data:image/png;base64,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"
              alt="Settings"
              style={{ width: '21px', height: '22px', borderRadius: 28 }}
            />
          }
        />
      </Popover>
      {props.right}
    </div>
  );

  return TopBar;
};
