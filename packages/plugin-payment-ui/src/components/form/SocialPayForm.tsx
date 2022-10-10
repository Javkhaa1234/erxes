import Button from '@erxes/ui/src/components/Button';
import FormControl from '@erxes/ui/src/components/form/Control';
import Form from '@erxes/ui/src/components/form/Form';
import FormGroup from '@erxes/ui/src/components/form/Group';
import ControlLabel from '@erxes/ui/src/components/form/Label';
import { ModalFooter } from '@erxes/ui/src/styles/main';
import { IButtonMutateProps, IFormProps } from '@erxes/ui/src/types';
import { __, getEnv } from '@erxes/ui/src/utils';
import React from 'react';
import { IPaymentConfigDocument, ISocialPayConfig } from 'types';

import { PAYMENT_KINDS } from '../constants';
import { SettingsContent } from './styles';

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  closeModal: () => void;
  paymentConfig?: IPaymentConfigDocument;
};

type State = {
  paymentConfigName: string;
  inStoreSPTerminal: string;
  inStoreSPKey: string;
};

class SocialPayConfigForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { paymentConfig } = this.props;
    const { name, config } = paymentConfig || ({} as IPaymentConfigDocument);
    const { inStoreSPTerminal, inStoreSPKey } =
      config || ({} as ISocialPayConfig);

    this.state = {
      paymentConfigName: name || '',
      inStoreSPTerminal: inStoreSPTerminal || '',
      inStoreSPKey: inStoreSPKey || ''
    };
  }

  generateDoc = (values: {
    paymentConfigName: string;
    inStoreSPTerminal: string;
    inStoreSPKey: string;
  }) => {
    const { paymentConfig } = this.props;
    const generatedValues = {
      name: values.paymentConfigName,
      kind: PAYMENT_KINDS.SOCIALPAY,
      status: 'active',
      config: {
        inStoreSPTerminal: values.inStoreSPTerminal,
        inStoreSPKey: values.inStoreSPKey
      }
    };

    return paymentConfig
      ? { ...generatedValues, id: paymentConfig._id }
      : generatedValues;
  };

  onChangeConfig = (code: string, e) => {
    this.setState({ [code]: e.target.value } as any);
  };

  renderItem = (key: string, title: string, description?: string) => {
    const value =
      key === 'pushNotification'
        ? `${getEnv().REACT_APP_API_URL}/pl:payment/callback/socialPay`
        : this.state[key];

    return (
      <FormGroup>
        <ControlLabel>{title}</ControlLabel>
        {description && <p>{description}</p>}
        <FormControl
          defaultValue={value}
          onChange={this.onChangeConfig.bind(this, key)}
          value={value}
          disabled={key === 'pushNotification'}
        />
      </FormGroup>
    );
  };

  renderContent = (formProps: IFormProps) => {
    const { renderButton, closeModal } = this.props;
    const { isSubmitted } = formProps;
    const { paymentConfigName, inStoreSPTerminal, inStoreSPKey } = this.state;

    const values = {
      paymentConfigName,
      inStoreSPTerminal,
      inStoreSPKey
    };

    return (
      <>
        <SettingsContent title={__('General settings')}>
          {this.renderItem('paymentConfigName', 'Name')}
          {this.renderItem('inStoreSPTerminal', 'Terminal')}
          {this.renderItem('inStoreSPKey', 'Key')}
          {this.renderItem(
            'pushNotification',
            'Notification URL',
            'Register following URL in Golomt Bank'
          )}
        </SettingsContent>

        <ModalFooter>
          <Button
            btnStyle="simple"
            type="button"
            onClick={closeModal}
            icon="times-circle"
          >
            Cancel
          </Button>
          {renderButton({
            name: 'socialPay',
            values: this.generateDoc(values),
            isSubmitted,
            callback: closeModal
          })}
        </ModalFooter>
      </>
    );
  };

  render() {
    return <Form renderContent={this.renderContent} />;
  }
}

export default SocialPayConfigForm;